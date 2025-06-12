class Solution {
public:
    void connect(Node* root) {
        if (!root) return;
        Node* leftmost = root;

        while (leftmost->left) {
            Node* head = leftmost;
            while (head) {
                head->left->next = head->right;
                if (head->next) head->right->next = head->next->left;
                head = head->next;
            }
            leftmost = leftmost->left;
        }
    }
};
