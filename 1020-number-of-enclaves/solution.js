def numEnclaves(grid):
    rows, cols = len(grid), len(grid[0])
    
    def dfs(r, c):
        if 0 <= r < rows and 0 <= c < cols and grid[r][c] == 1:
            grid[r][c] = -1
            for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                dfs(r + dr, c + dc)

    for r in range(rows):
        for c in range(cols):
            if (r == 0 or r == rows - 1 or c == 0 or c == cols - 1) and grid[r][c] == 1:
                dfs(r, c)

    return sum(grid[r][c] == 1 for r in range(rows) for c in range(cols))
