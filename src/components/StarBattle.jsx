import { useState } from "react";
import StarImage from "../assets/star.png";
import RedX from "../assets/red-x.png";

function StarBattle({
    gridSize = 10,
    starsPerRow = 2,
    regions,
    locked = false,
    presetStars = [],   // { r, c } permanent stars
    presetXs = [],      // { r, c } permanent Xs
    presetShades = [],  // { r, c } shaded cells
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
        newXGrid[row][col] = !newXGrid[row][col];
        setXGrid(newXGrid);
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
        for (let r = 0; r < gridSize; r++) if (rowCount[r] > starsPerRow) return setMessage("There are errors");
        for (let c = 0; c < gridSize; c++) if (colCount[c] > starsPerRow) return setMessage("There are errors");
        for (let region of Object.keys(regionCount)) if (regionCount[region] > starsPerRow) return setMessage("There are errors");

        const fullySolved =
            rowCount.every(count => count === starsPerRow) &&
            colCount.every(count => count === starsPerRow) &&
            Object.values(regionCount).every(count => count === starsPerRow);

        setMessage(fullySolved ? "Puzzle solved!" : "Correct so far!");
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
        <div className="relative inline-block m-4">
            <div
                className="grid relative z-20"
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
                            : lockedGrid[r][c]
                                ? "bg-gray-100"
                                : shadedGrid[r][c]
                                    ? "bg-green-200"
                                    : "bg-white";

                        return (
                            <div
                                key={`${r}-${c}`}
                                className={`w-12 h-12 flex items-center justify-center cursor-pointer box-border
                            ${getCellBorders(r, c)} ${bgClass}`}
                                onClick={() => toggleStar(r, c)}
                                onContextMenu={(e) => toggleX(r, c, e)}
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
                {message && <p className="mt-2 text-lg font-semibold text-gray-800">{message}</p>}
            </div>
        </div>
    );
}

export default StarBattle;
