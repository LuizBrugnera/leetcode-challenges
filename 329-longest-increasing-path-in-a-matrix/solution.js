function longestIncreasingPath(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(0)); // dp array to store lengths
    let maxPathLength = 0;

    // Define directions for moving in the matrix (up, down, left, right)
    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    // Depth First Search (DFS) with memoization
    const dfs = (x, y) => {
        // If already computed, return the cached result
        if (dp[x][y] !== 0) return dp[x][y];

        let length = 1; // Base length starting from the current cell

        // Explore all four possible directions
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check bounds and increasing condition
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && matrix[nx][ny] > matrix[x][y]) {
                length = Math.max(length, 1 + dfs(nx, ny));
            }
        }

        dp[x][y] = length; // Memoize the length
        return length;
    };

    // Iterate through all cells in the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxPathLength = Math.max(maxPathLength, dfs(i, j));
        }
    }

    return maxPathLength; // Return the length of the longest increasing path
}

// Análise de complexidade:
// - Tempo: O(m * n), onde m é o número de linhas e n o número de colunas. Cada célula é visitada uma vez durante a DFS e memoização.
// - Espaço: O(m * n) devido ao armazenamento da matriz dp para memoização e o espaço na pilha da DFS, que pode ir até a profundidade m*n no pior caso.
