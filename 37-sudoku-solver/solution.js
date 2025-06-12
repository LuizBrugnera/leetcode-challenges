def solveSudoku(board):
    def is_valid(board, r, c, num):
        for i in range(9):
            if board[r][i] == num or board[i][c] == num:
                return False
            if board[3 * (r // 3) + i // 3][3 * (c // 3) + i % 3] == num:
                return False
        return True

    def backtrack():
        for r in range(9):
            for c in range(9):
                if board[r][c] == '.':
                    for num in map(str, range(1, 10)):
                        if is_valid(board, r, c, num):
                            board[r][c] = num
                            if backtrack():
                                return True
                            board[r][c] = '.'
                    return False
        return True

    backtrack()
