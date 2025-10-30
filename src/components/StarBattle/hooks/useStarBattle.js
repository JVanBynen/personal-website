import { useState, useEffect } from "react";
import useStarClicking from "./useStarClicking";
import { getCellBorders } from "../utilities/uiHelpers";
import { isViolation, checkSolution } from "../utilities/validation";

/**
 * Custom hook to manage the state and behavior of a Star Battle grid.
 * Handles stars, Xs, shaded cells, validation, and interaction logic.
 */
export default function useStarBattle({
    gridSize = 10,
    starsPerRow = 2,
    regions,
    locked = false,
    presetStars = [],
    presetXs = [],
    presetShades = [],
    solutionGrid = null,
    autoXEnabled: initialAutoX = true
}) {
    /**
     * Setting up states
     */
    const [grid, setGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetStars.some(p => p.r === r && p.c === c)
            )
        )
    );

    const [xGrid, setXGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetXs.some(p => p.r === r && p.c === c)
            )
        )
    );

    const [shadedGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetShades.some(p => p.r === r && p.c === c)
            )
        )
    );

    const [lockedGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetStars.some(p => p.r === r && p.c === c) ||
                presetXs.some(p => p.r === r && p.c === c)
            )
        )
    );

    const [autoXEnabled, setAutoXEnabled] = useState(initialAutoX);
    const [isRightMouseDown, setIsRightMouseDown] = useState(false);
    const [xActionMode, setXActionMode] = useState(null);
    const [message, setMessage] = useState("");

    /**
     * Handles right click hook
     */
    const {
        handleRightMouseDown,
        handleRightMouseEnter,
        handleMouseUp
    } = useStarClicking({
        grid,
        xGrid,
        lockedGrid,
        setXGrid,
        locked,
        isRightMouseDown,
        setIsRightMouseDown,
        xActionMode,
        setXActionMode
    });

    /**
     * Global even listener blocks right click menu
     */
    useEffect(() => {
        const preventMenu = (e) => e.preventDefault();
        window.addEventListener("contextmenu", preventMenu);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("contextmenu", preventMenu);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseUp]);

    /**
     * Surrounds star with Xs
     */
    const placeAutoXs = (row, col, newGrid, newXGrid) => {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;
            if (
                nr >= 0 && nr < gridSize &&
                nc >= 0 && nc < gridSize &&
                !newGrid[nr][nc] &&
                !lockedGrid[nr][nc]
            ) {
                newXGrid[nr][nc] = true;
            }
        }
    };
    /**
     * Toggles star for cell
     */
    const toggleStar = (row, col) => {
        if (locked || lockedGrid[row][col]) return;

        const newGrid = grid.map(r => [...r]);
        const newXGrid = xGrid.map(r => [...r]);

        const wasStar = newGrid[row][col];
        newGrid[row][col] = !wasStar;

        if (!wasStar && autoXEnabled) {
            newXGrid[row][col] = false;
            placeAutoXs(row, col, newGrid, newXGrid);
        }

        setGrid(newGrid);
        setXGrid(newXGrid);
    };
    /**
     * Toggles x at cell
     */
    const toggleX = (row, col) => {
        if (locked || lockedGrid[row][col] || grid[row][col]) return;
        const newXGrid = xGrid.map(r => [...r]);
        newXGrid[row][col] = !newXGrid[row][col];
        setXGrid(newXGrid);
    };

    return {
        grid,
        xGrid,
        shadedGrid,
        lockedGrid,
        autoXEnabled,
        setAutoXEnabled,
        toggleStar,
        toggleX,
        handleRightMouseDown,
        handleRightMouseEnter,
        handleMouseUp,
        message,

        // validation & UI helpers
        isViolation: (r, c) => isViolation(grid, regions, starsPerRow, r, c),
        checkSolution: () => {
            const result = checkSolution(grid, xGrid, solutionGrid);
            if (solutionGrid) {
                if (result.mistakes > 1) setMessage(`There are ${result.mistakes} mistakes in the grid.`);
                else if (result.mistakes === 1) setMessage("There is 1 mistake in the grid.");
                else if (result.solved) setMessage("Finished!");
            }
        },
        getCellBorders: (r, c) => getCellBorders(r, c, regions, gridSize),
    };
}
