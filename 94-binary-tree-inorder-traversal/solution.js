class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root):
    res = []
    def traverse(node):
        if node:
            traverse(node.left)
            res.append(node.val)
            traverse(node.right)
    traverse(root)
    return res
