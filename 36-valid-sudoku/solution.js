def isValidSudoku(board):
    rows, cols, boxes = [set() for _ in range(9)], [set() for _ in range(9)], [set() for _ in range(9)]
    
    for i in range(9):
        for j in range(9):
            num = board[i][j]
            if num != '.':
                box_index = (i // 3) * 3 + (j // 3)
                if num in rows[i] or num in cols[j] or num in boxes[box_index]:
                    return False
                rows[i].add(num)
                cols[j].add(num)
                boxes[box_index].add(num)
                
    return True
