class Solution {
  public:
    Node* reverseList(Node* head) {
        Node* prev = nullptr;  // Initially, no previous node
        Node* curr = head;     // Start with the head of the list
        Node* next_node = nullptr;

        while (curr != nullptr) {
            next_node = curr->next;  // Store the next node
            curr->next = prev;       // Reverse the current node's pointer
            prev = curr;             // Move prev to the current node
            curr = next_node;        // Move to the next node
        }

        return prev;  // prev will be the new head of the reversed list
    }
};
