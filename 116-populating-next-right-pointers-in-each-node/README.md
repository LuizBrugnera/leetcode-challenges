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

Populates each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
