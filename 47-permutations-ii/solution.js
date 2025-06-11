def permuteUnique(nums):
    def backtrack(start):
        if start == len(nums):
            result.add(tuple(nums[:]))
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    
    result = set()
    nums.sort()
    backtrack(0)
    return [list(p) for p in result]
