def minPathSum(grid):
    m, n = len(grid), len(grid[0])
    for i in range(m):
        for j in range(n):
            if i == 0 and j == 0:
                continue
            top = grid[i-1][j] if i > 0 else float('inf')
            left = grid[i][j-1] if j > 0 else float('inf')
            grid[i][j] += min(top, left)
    return grid[-1][-1]
