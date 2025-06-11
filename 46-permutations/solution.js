def permute(nums):
    from itertools import permutations
    return list(map(list, permutations(nums)))

# Example usage:
# result = permute([1, 2, 3])
