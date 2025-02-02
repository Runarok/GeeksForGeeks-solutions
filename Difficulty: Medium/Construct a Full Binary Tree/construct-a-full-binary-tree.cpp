//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;

struct Node
{
	int data;
	struct Node *left;
	struct Node *right;
	
	Node(int x){
	    data = x;
	    left = NULL;
	    right = NULL;
	}
};


// } Driver Code Ends
/* Structre of the Node of the Binary Tree is as follows
struct Node
{
        int data;
        struct Node *left, *right;
};
*/
// your task is to complete this function
// function should create a new binary tree
// function should return the root node to the 
// new binary tree formed
/* Structure of the Node of the Binary Tree is as follows
struct Node
{
        int data;
        struct Node *left, *right;
};
*/

class Solution{
  public:
  // Helper function to construct the binary tree
  Node* help(int &index, int start, int end, int pre[], int preMirror[], int n){
        // Base case: if start is greater than end or if we've processed all nodes
        if (start > end || index >= n) {
            return NULL;
        }
        
        // If we reach the last node or a single node in the range, create and return a leaf node
        if (index == n - 1 || start == end) {
            Node* temp = new Node(pre[index]);
            index++;
            return temp;
        }

        // Create a new node with the current value in pre[] at the current index
        Node* root = new Node(pre[index]);
        index++;  // Move to the next element in pre[]
        
        // Search for the value of pre[index] in the preMirror[] array to determine the left and right subtree
        for (int i = start; i <= end; i++) {
            if (pre[index] == preMirror[i]) {
                // Recursively build the left subtree
                root->left = help(index, i, end, pre, preMirror, n);
                
                // Recursively build the right subtree
                root->right = help(index, start + 1, i - 1, pre, preMirror, n);
                break;  // Stop once we've found the appropriate split
            }
        }
        
        return root;  // Return the root node
    }

    // Main function to construct the binary tree from pre-order and pre-mirror arrays
    Node* constructBinaryTree(int pre[], int preMirror[], int size)
    {
        int index = 0;  // Initialize index for pre[] array
        return help(index, 0, size - 1, pre, preMirror, size);  // Call helper function to construct tree
    }
};


//{ Driver Code Starts.

void printInorder(Node* node)
{
	if (node == NULL)return;
	printInorder(node->left);
	cout<<node->data<<" ";
	printInorder(node->right);
}

// Driver program to test above functions
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int preOrder[n];
	    int preOrderMirror[n];
	    for(int i=0; i<n; i++)cin>>preOrder[i];
	    for(int i=0; i<n; i++)cin>>preOrderMirror[i];
	    Solution obj;
	    printInorder(obj.constructBinaryTree(preOrder, preOrderMirror, n));
	    cout<<endl;
    
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends