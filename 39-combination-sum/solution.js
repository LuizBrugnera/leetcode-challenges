def combinationSum(candidates, target):
    def backtrack(remaining, combination, start):
        if remaining == 0:
            result.append(list(combination))
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:
                continue
            combination.append(candidates[i])
            backtrack(remaining - candidates[i], combination, i)
            combination.pop()
    
    result = []
    backtrack(target, [], 0)
    return result
