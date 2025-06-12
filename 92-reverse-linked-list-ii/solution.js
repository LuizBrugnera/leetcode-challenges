class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseBetween(head: ListNode, left: int, right: int) -> ListNode:
    if not head or left == right:
        return head
    
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    
    for _ in range(left - 1):
        prev = prev.next
    
    reverse = None
    curr = prev.next
    
    for _ in range(right - left + 1):
        next_node = curr.next
        curr.next = reverse
        reverse = curr
        curr = next_node
    
    prev.next.next = curr
    prev.next = reverse
    
    return dummy.next
