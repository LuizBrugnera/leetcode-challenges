# Populating Next Right Pointers in Each Node (LeetCode #116)

**Dificuldade:** Medium  
**URL:** https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populating Next Right Pointers in Each Node requires you to connect all nodes at the same level. The value of the next pointer of a node is automatically connected to the next node at the same level in the tree. If there is no next node, the next pointer should be set to NULL.
