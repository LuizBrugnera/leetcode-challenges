from collections import Counter, defaultdict

def minWindow(s: str, t: str) -> str:
    if not t or not s:
        return ""
    
    dict_t = Counter(t)
    required = len(dict_t)
    l, r = 0, 0
    formed = 0
    window_counts = defaultdict(int)
    ans = float("inf"), None, None
    
    while r < len(s):
        character = s[r]
        window_counts[character] += 1
        
        if character in dict_t and window_counts[character] == dict_t[character]:
            formed += 1
        
        while l <= r and formed == required:
            character = s[l]
            end = r - l + 1
            
            if end < ans[0]:
                ans = (end, l, r)
            
            window_counts[character] -= 1
            if character in dict_t and window_counts[character] < dict_t[character]:
                formed -= 1
            
            l += 1
        
        r += 1
    
    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]
