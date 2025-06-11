from typing import List

def permuteUnique(nums: List[int]) -> List[List[int]]:
    res = []
    nums.sort()
    
    def backtrack(path, used):
        if len(path) == len(nums):
            res.append(path[:])
            return
        for i in range(len(nums)):
            if used[i] or (i > 0 and nums[i] == nums[i - 1] and not used[i - 1]):
                continue
            used[i] = True
            path.append(nums[i])
            backtrack(path, used)
            path.pop()
            used[i] = False
            
    backtrack([], [False] * len(nums))
    return res
