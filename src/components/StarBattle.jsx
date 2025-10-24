import { useState, useEffect } from "react";
import StarImage from "../assets/star.png";
import RedX from "../assets/red-x.png";

function StarBattle({
    gridSize = 10,
    starsPerRow = 2,
    regions,
    locked = false,
    presetStars = [],       // { r, c } permanent stars
    presetXs = [],          // { r, c } permanent Xs
    presetShades = [],      // { r, c } shaded cells
    solutionGrid = null,    // optional solution grid for validation
}) {
    // main star grid
    const [grid, setGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetStars.some(p => p.r === r && p.c === c)
            )
        )
    );

    // permanent locked cells: preset stars + preset Xs
    const [lockedGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetStars.some(p => p.r === r && p.c === c) ||
                presetXs.some(p => p.r === r && p.c === c)
            )
        )
    );

    // X grid
    const [xGrid, setXGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetXs.some(p => p.r === r && p.c === c)
            )
        )
    );

    // shaded cells
    const [shadedGrid] = useState(
        Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) =>
                presetShades.some(p => p.r === r && p.c === c)
            )
        )
    );

    // Track if the right mouse button is held down
    const [isRightMouseDown, setIsRightMouseDown] = useState(false);
    const [xActionMode, setXActionMode] = useState(null); // "place" or "remove"
    useEffect(() => {
        const handleMouseUp = (e) => {
            if (e.button === 2) {
                setIsRightMouseDown(false);
                setXActionMode(null);
            }
        };

        // This prevents the context menu **anywhere** on the page while dragging
        const preventContextMenu = (e) => {
            if (isRightMouseDown) e.preventDefault();
        };

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("contextmenu", preventContextMenu);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("contextmenu", preventContextMenu);
        };
    }, [isRightMouseDown]);

    // Detect global mouse release to stop drawing
    useEffect(() => {
        const handleMouseDown = (e) => {
            if (e.button === 2) setIsRightMouseDown(true);
        };

        const handleMouseUp = (e) => {
            if (e.button === 2) {
                setIsRightMouseDown(false);
                setXActionMode(null); // reset the place/remove mode
            }
        };

        const preventMenu = (e) => e.preventDefault();

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("contextmenu", preventMenu);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("contextmenu", preventMenu);
        };
    }, []);

    const handleRightMouseDown = (e, row, col) => {
        if (e.button === 2) {
            e.preventDefault();
            setIsRightMouseDown(true);

            const cellHasX = xGrid[row][col];
            const mode = cellHasX ? "remove" : "place";
            setXActionMode(mode);

            const newXGrid = xGrid.map(r => [...r]);
            if (!locked && !lockedGrid[row][col] && !grid[row][col]) {
                newXGrid[row][col] = mode === "place";
                setXGrid(newXGrid);
            }
        }
    };

    const handleRightMouseEnter = (e, row, col) => {
        if (isRightMouseDown && xActionMode) {
            e.preventDefault();
            if (locked || lockedGrid[row][col] || grid[row][col]) return;

            const newXGrid = xGrid.map(r => [...r]);
            if (xActionMode === "place" && !newXGrid[row][col]) {
                newXGrid[row][col] = true;
            } else if (xActionMode === "remove" && newXGrid[row][col]) {
                newXGrid[row][col] = false;
            }
            setXGrid(newXGrid);
        }
    };

    const handleMouseUp = () => {
        setIsRightMouseDown(false);
        setXActionMode(null);
    };

    const [message, setMessage] = useState("");
    const cellSize = 48;
    const gap = 2;

    const toggleStar = (row, col) => {
        if (locked || lockedGrid[row][col]) return;
        const newGrid = grid.map(r => [...r]);
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);

        if (xGrid[row][col] && newGrid[row][col]) {
            const newXGrid = xGrid.map(r => [...r]);
            newXGrid[row][col] = false;
            setXGrid(newXGrid);
        }
    };

    const toggleX = (row, col, e) => {
        e.preventDefault();
        if (locked || lockedGrid[row][col] || grid[row][col]) return;
        const newXGrid = xGrid.map(r => [...r]);
        if (!newXGrid[row][col]) {
            newXGrid[row][col] = true; // only place X if not already set
            setXGrid(newXGrid);
        }
    };

    const checkCounts = () => {
        const rowCount = Array(gridSize).fill(0);
        const colCount = Array(gridSize).fill(0);
        const regionCount = {};

        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                if (grid[r][c]) {
                    rowCount[r] += 1;
                    colCount[c] += 1;
                    const region = regions[r][c];
                    regionCount[region] = (regionCount[region] || 0) + 1;
                }
            }
        }
        return { rowCount, colCount, regionCount };
    };

    const { rowCount, colCount, regionCount } = checkCounts();

    const isViolation = (r, c) => {
        if (!grid[r][c]) return false;
        const region = regions[r][c];

        // Row, column, region counts
        const rowTooMany = rowCount[r] > starsPerRow;
        const colTooMany = colCount[c] > starsPerRow;
        const regionTooMany = regionCount[region] > starsPerRow;

        // Check adjacent cells for touching stars (including diagonals)
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        const touching = directions.some(([dr, dc]) => {
            const nr = r + dr;
            const nc = c + dc;
            return nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && grid[nr][nc];
        });

        return rowTooMany || colTooMany || regionTooMany || touching;
    };

    const checkSolution = () => {

        if (solutionGrid) {
            let mistakes = 0;
            let allCorrect = true;

            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c < gridSize; c++) {
                    const val = solutionGrid[r][c]; // 0=empty, 1=star, 2=X
                    const hasStar = !!grid[r][c];
                    const hasX = !!xGrid[r][c];

                    if (val === 0 && (hasStar || hasX)) {
                        // extra mark where it should be empty
                        mistakes += 1;
                    } else if (val === 1 && hasX) {
                        // X in a star cell is a mistake
                        mistakes += 1;
                    } else if (val === 2 && hasStar) {
                        // star in an X cell is a mistake
                        mistakes += 1;
                    }

                    // Check if all required stars/Xs are placed
                    if ((val === 1 && !hasStar) || (val === 2 && !hasX)) {
                        allCorrect = false;
                    }
                }
            }

            // Determine message
            if (mistakes > 1) setMessage(`There are ${mistakes} mistakes in the grid.`);
            else if (mistakes === 1) setMessage("There is 1 mistake in the grid.");
            else if (allCorrect) setMessage("Finished!");
            else setMessage("Correct so far!");
        }

        else {
            for (let r = 0; r < gridSize; r++) if (rowCount[r] > starsPerRow) return setMessage("There are errors");
            for (let c = 0; c < gridSize; c++) if (colCount[c] > starsPerRow) return setMessage("There are errors");
            for (let region of Object.keys(regionCount)) if (regionCount[region] > starsPerRow) return setMessage("There are errors");

            const fullySolved =
                rowCount.every(count => count === starsPerRow) &&
                colCount.every(count => count === starsPerRow) &&
                Object.values(regionCount).every(count => count === starsPerRow);

            setMessage(fullySolved ? "Puzzle solved!" : "Correct so far!");
        }
    };

    const getCellBorders = (r, c) => {
        const region = regions[r][c];
        const top = r === 0 || regions[r - 1][c] !== region ? "border-t-4" : "";
        const bottom = r === gridSize - 1 || regions[r + 1][c] !== region ? "border-b-4" : "";
        const left = c === 0 || regions[r][c - 1] !== region ? "border-l-4" : "";
        const right = c === gridSize - 1 || regions[r][c + 1] !== region ? "border-r-4" : "";
        return `${top} ${bottom} ${left} ${right} border-blue-500`;
    };

    return (
        <div className={`inline-block m-4 p-2 rounded-md
    ${message === "Finished!" ? "border-4 border-green-500" : "border border-gray-300"}`}>
            <div
                className="grid relative z-20 select-none"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                    gap: `${gap}px`,
                }}
            >
                {grid.map((row, r) =>
                    row.map((cell, c) => {
                        // compute background class
                        const bgClass = cell && isViolation(r, c)
                            ? "bg-red-400"
                            : shadedGrid[r][c]
                                ? "bg-green-200"
                                : lockedGrid[r][c]
                                    ? "bg-gray-100"
                                    : "bg-white";

                        return (
                            <div
                                key={`${r}-${c}`}
                                className={`w-12 h-12 flex items-center justify-center cursor-pointer box-border
                                    ${getCellBorders(r, c)} ${bgClass}`}
                                onClick={() => toggleStar(r, c)}
                                onContextMenu={(e) => e.preventDefault()} // block the browser menu
                                onMouseDown={(e) => handleRightMouseDown(e, r, c)}
                                onMouseEnter={(e) => handleRightMouseEnter(e, r, c)}
                            >
                                {cell && (
                                    <img
                                        src={StarImage}
                                        alt="Star"
                                        className={`w-8 h-8 object-contain ${lockedGrid[r][c] ? "opacity-70" : ""}`}
                                    />
                                )}
                                {!cell && xGrid[r][c] && (
                                    <img
                                        src={RedX}
                                        alt="X"
                                        className="w-6 h-6 object-contain"
                                    />
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            <div className="flex flex-col items-center mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={checkSolution}
                >
                    Check Solution
                </button>
                {message && <p className="mt-2 text-lg font-semibold text-white-800">{message}</p>}
            </div>
        </div>
    );
}

export default StarBattle;
