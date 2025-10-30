/**
 * Returns borders for regions in grid
 */
export function getCellBorders(r, c, regions, gridSize) {
    const region = regions[r][c];
    const top = r === 0 || regions[r - 1][c] !== region ? "border-t-4" : "";
    const bottom = r === gridSize - 1 || regions[r + 1][c] !== region ? "border-b-4" : "";
    const left = c === 0 || regions[r][c - 1] !== region ? "border-l-4" : "";
    const right = c === gridSize - 1 || regions[r][c + 1] !== region ? "border-r-4" : "";
    return `${top} ${bottom} ${left} ${right} border-blue-500`;
}
