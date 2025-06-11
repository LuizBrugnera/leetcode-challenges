def permute(nums):
    from itertools import permutations
    return list(map(list, permutations(nums)))
