import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists):
        min_heap = []
        for l in lists:
            while l:
                heapq.heappush(min_heap, l.val)
                l = l.next
        
        dummy = ListNode(0)
        current = dummy
        while min_heap:
            current.next = ListNode(heapq.heappop(min_heap))
            current = current.next
        
        return dummy.next
