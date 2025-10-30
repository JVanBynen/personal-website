/**
 * Count stars in each row, column, and region
 */
export function countStars(grid, regions) {
    const gridSize = grid.length;
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
}

/**
 * Check if a star at (r, c) violates any rules
 */
export function isViolation(grid, regions, starsPerRow, r, c) {
    if (!grid[r][c]) return false;

    const { rowCount, colCount, regionCount } = countStars(grid, regions);
    const region = regions[r][c];

    const rowTooMany = rowCount[r] > starsPerRow;
    const colTooMany = colCount[c] > starsPerRow;
    const regionTooMany = regionCount[region] > starsPerRow;

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    const touching = directions.some(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        return nr >= 0 && nr < grid.length && nc >= 0 && nc < grid.length && grid[nr][nc];
    });

    return rowTooMany || colTooMany || regionTooMany || touching;
}

/**
 * Check if the grid matches a solution (optional)
 */
export function checkSolution(grid, xGrid, solutionGrid) {
    if (!solutionGrid) return { solved: false, mistakes: 0 };

    let mistakes = 0;
    let allCorrect = true;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const val = solutionGrid[r][c];
            const hasStar = !!grid[r][c];
            const hasX = !!xGrid[r][c];

            if (val === 0 && (hasStar || hasX)) mistakes++;
            else if (val === 1 && hasX) mistakes++;
            else if (val === 2 && hasStar) mistakes++;

            if ((val === 1 && !hasStar) || (val === 2 && !hasX)) allCorrect = false;
        }
    }

    return { solved: allCorrect, mistakes };
}