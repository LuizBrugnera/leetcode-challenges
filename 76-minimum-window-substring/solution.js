from collections import Counter

def min_window(S, T):
    if not T or not S:
        return ""
    
    dict_t = Counter(T)
    required = len(dict_t)
    l, r = 0, 0
    formed = 0
    window_counts = {}
    ans = float("inf"), None, None
    
    while r < len(S):
        character = S[r]
        window_counts[character] = window_counts.get(character, 0) + 1
        
        if character in dict_t and window_counts[character] == dict_t[character]:
            formed += 1
            
        while l <= r and formed == required:
            character = S[l]
            end = r - l + 1
            
            if end < ans[0]:
                ans = (end, l, r)
            
            window_counts[character] -= 1
            if character in dict_t and window_counts[character] < dict_t[character]:
                formed -= 1
                
            l += 1
            
        r += 1

    return "" if ans[0] == float("inf") else S[ans[1]: ans[2] + 1]
