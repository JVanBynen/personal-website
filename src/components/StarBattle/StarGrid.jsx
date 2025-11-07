import StarCell from "./StarCell";

export default function StarBattleGrid({
    grid,
    xGrid,
    shadedGrid,
    lockedGrid,
    cellSize = 48,
    gap = 2,
    isViolation,
    toggleStar,
    toggleX,
    handleRightMouseDown,
    handleRightMouseEnter,
    hasStarted,
    isRunning,
    getCellBorders,
    isSolved,
}) {
    // compute overlay/dimming visibility
    const showOverlay = !isSolved && (!isRunning || !hasStarted);
    console.log("Overlay check:", { isSolved, isRunning, hasStarted, showOverlay });

    return (
        <div className="relative inline-block">
            {/* Dimmed Overlay */}
            {showOverlay && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl font-semibold z-30 rounded">
                    {!hasStarted ? "Press Start to Begin" : "Paused"}
                </div>
            )}
            {/* Puzzle grid itself */}
            <div
                className={`grid transition-opacity duration-600 select-none ${showOverlay
                    ? "opacity-30 blur-sm pointer-events-none"
                    : "opacity-100"
                    }`}
                style={{
                    gridTemplateColumns: `repeat(${grid.length}, ${cellSize}px)`,
                    gap: `${gap}px`,
                }}
            >
                {grid.map((row, r) =>
                    row.map((cell, c) => (
                        <StarCell
                            key={`${r}-${c}`}
                            row={r}
                            col={c}
                            value={cell}
                            hasX={xGrid[r][c]}
                            shaded={shadedGrid[r][c]}
                            locked={lockedGrid[r][c]}
                            isViolation={isViolation(r, c)}
                            borders={getCellBorders(r, c)}
                            onClick={toggleStar}
                            onRightMouseDown={handleRightMouseDown}
                            onRightMouseEnter={handleRightMouseEnter}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
