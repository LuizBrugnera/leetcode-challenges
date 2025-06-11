def removeCoveredIntervals(intervals):
    intervals.sort(key=lambda x: (x[0], -x[1]))
    count = 0
    end = 0
    for _, b in intervals:
        if b > end:
            count += 1
            end = b
    return count
