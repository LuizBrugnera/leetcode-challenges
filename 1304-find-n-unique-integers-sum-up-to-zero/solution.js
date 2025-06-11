def sumZero(n: int) -> List[int]:
    return list(range(-n // 2, n // 2 + 1)) if n % 2 == 0 else list(range(-n // 2, n // 2 + 1))
