def countAndSay(n: int) -> str:
    if n == 1:
        return "1"
    prev = countAndSay(n - 1)
    result, count, char = "", 1, prev[0]
    for i in range(1, len(prev)):
        if prev[i] == char:
            count += 1
        else:
            result += str(count) + char
            char = prev[i]
            count = 1
    result += str(count) + char
    return result
