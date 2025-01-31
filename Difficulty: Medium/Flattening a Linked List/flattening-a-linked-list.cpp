//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    struct Node * next;
    struct Node * bottom;

    Node(int x) {
        data = x;
        next = NULL;
        bottom = NULL;
    }

};

void printList(Node *Node)
{
    while (Node != NULL)
    {
        printf("%d ", Node->data);
        Node = Node->bottom;
    }
}


// } Driver Code Ends
/* Node structure  used in the program

struct Node{
	int data;
	struct Node * next;
	struct Node * bottom;
	
	Node(int x){
	    data = x;
	    next = NULL;
	    bottom = NULL;
	}
	
};
*/

class Solution {
public:

    // Merges two sorted linked lists using the bottom pointers
    Node* merge(Node* list1, Node* list2) {
        Node* dummy = new Node(-1); // Dummy node to simplify list merging
        Node* mergedTail = dummy;   // Pointer to track the merged list

        Node* ptr1 = list1;
        Node* ptr2 = list2;

        // Merge both lists in sorted order
        while (ptr1 && ptr2) {
            if (ptr1->data < ptr2->data) {
                mergedTail->bottom = new Node(ptr1->data);
                ptr1 = ptr1->bottom;
            } else {
                mergedTail->bottom = new Node(ptr2->data);
                ptr2 = ptr2->bottom;
            }
            mergedTail = mergedTail->bottom;
        }

        // Append any remaining nodes from list1
        while (ptr1) {
            mergedTail->bottom = new Node(ptr1->data);
            ptr1 = ptr1->bottom;
            mergedTail = mergedTail->bottom;
        }

        // Append any remaining nodes from list2
        while (ptr2) {
            mergedTail->bottom = new Node(ptr2->data);
            ptr2 = ptr2->bottom;
            mergedTail = mergedTail->bottom;
        }

        return dummy->bottom; // Return the merged list, skipping the dummy node
    }

    // Flattens the linked list by merging all sublists
    Node *flatten(Node *head) {
        if (!head || !head->next) return head; // Base case: single list remains

        // Recursively flatten the rest of the lists
        Node* nextFlattened = flatten(head->next);

        // Merge current list with the flattened remainder
        return merge(head, nextFlattened);
    }
};



//{ Driver Code Starts.

int main(void) {

    int t;
    cin >> t;
    while (t--) {
        int n, m, flag = 1, flag1 = 1;
        struct Node * temp = NULL;
        struct Node * head = NULL;
        struct Node * pre = NULL;
        struct Node * tempB = NULL;
        struct Node * preB = NULL;
        cin >> n;
        int work[n];
        for (int i = 0; i < n; i++)
            cin >> work[i];
        for (int i = 0; i < n; i++) {
            m = work[i];
            --m;
            int data;
            scanf("%d", &data);
            temp = new Node(data);
            temp->next = NULL;
            temp->bottom = NULL;

            if (flag) {
                head = temp;
                pre = temp;
                flag = 0;
                flag1 = 1;
            }
            else {
                pre->next = temp;
                pre = temp;
                flag1 = 1;
            }
            for (int j = 0; j < m; j++) {

                int temp_data;
                scanf("%d", &temp_data);
                tempB = new Node(temp_data);

                if (flag1) {
                    temp->bottom = tempB;
                    preB = tempB;
                    flag1 = 0;
                }
                else {
                    preB->bottom = tempB;
                    preB = tempB;
                }
            }
        }
        Node *fun = head;
        Node *fun2 = head;

        Solution ob;
        Node* root = ob.flatten(head);
        printList(root);
        cout << endl;

    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends