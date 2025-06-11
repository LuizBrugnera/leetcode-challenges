def maximalRectangle(matrix):
    if not matrix or not matrix[0]:
        return 0
    
    n, m = len(matrix), len(matrix[0])
    heights = [0] * m
    max_area = 0
    
    for i in range(n):
        for j in range(m):
            heights[j] = heights[j] + 1 if matrix[i][j] == '1' else 0
        
        stack = []
        for j in range(m + 1):
            while stack and (j == m or heights[stack[-1]] > heights[j]):
                h = heights[stack.pop()]
                w = j if not stack else j - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(j)
    
    return max_area
