def exist(board, word):
    rows, cols = len(board), len(board[0])
    visited = set()
    
    def backtrack(r, c, index):
        if index == len(word):
            return True
        if (r < 0 or r >= rows or c < 0 or c >= cols or
                board[r][c] != word[index] or (r, c) in visited):
            return False
        visited.add((r, c))
        found = (backtrack(r + 1, c, index + 1) or
                 backtrack(r - 1, c, index + 1) or
                 backtrack(r, c + 1, index + 1) or
                 backtrack(r, c - 1, index + 1))
        visited.remove((r, c))
        return found
    
    for r in range(rows):
        for c in range(cols):
            if backtrack(r, c, 0):
                return True
    return False
