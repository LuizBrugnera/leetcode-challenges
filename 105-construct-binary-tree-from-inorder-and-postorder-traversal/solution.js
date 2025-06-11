class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(inorder, postorder):
    if not inorder or not postorder:
        return None
    
    root_val = postorder.pop()
    root = TreeNode(root_val)
    idx = inorder.index(root_val)
    
    root.right = buildTree(inorder[idx + 1:], postorder)
    root.left = buildTree(inorder[:idx], postorder)
    
    return root
