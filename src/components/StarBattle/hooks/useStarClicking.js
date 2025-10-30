/**
 * Manages click interactions with grid
 */
export default function useStarClicking({
    grid,
    xGrid,
    lockedGrid,
    setXGrid,
    locked = false,
    isRightMouseDown,
    setIsRightMouseDown,
    xActionMode,
    setXActionMode
}) {
    const handleRightMouseDown = (e, row, col) => {
        if (e.button !== 2) return;
        e.preventDefault();

        setIsRightMouseDown(true);
        const cellHasX = xGrid[row][col];
        const mode = cellHasX ? "remove" : "place";
        setXActionMode(mode);

        if (!locked && !lockedGrid[row][col] && !grid[row][col]) {
            const newXGrid = xGrid.map(r => [...r]);
            newXGrid[row][col] = mode === "place";
            setXGrid(newXGrid);
        }
    };

    const handleRightMouseEnter = (e, row, col) => {
        if (!isRightMouseDown || !xActionMode) return;
        e.preventDefault();

        if (locked || lockedGrid[row][col] || grid[row][col]) return;

        const newXGrid = xGrid.map(r => [...r]);
        newXGrid[row][col] = xActionMode === "place";
        setXGrid(newXGrid);
    };

    const handleMouseUp = () => {
        setIsRightMouseDown(false);
        setXActionMode(null);
    };

    return {
        handleRightMouseDown,
        handleRightMouseEnter,
        handleMouseUp
    };
}
