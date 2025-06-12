class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sortedListToBST(head):
    def convertListToBST(left, right):
        nonlocal head
        if left > right:
            return None
        mid = (left + right) // 2
        left_child = convertListToBST(left, mid - 1)
        node = TreeNode(head.val)
        head = head.next
        node.left = left_child
        node.right = convertListToBST(mid + 1, right)
        return node
    
    size = 0
    current = head
    while current:
        size += 1
        current = current.next
    return convertListToBST(0, size - 1)
