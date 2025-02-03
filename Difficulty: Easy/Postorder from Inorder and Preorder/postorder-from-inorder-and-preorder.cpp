//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

/* Prints the post-order traversal of the tree */
int findIndex(vector<int>& inorder, int start, int end, int target){
    for (int i = start; i <= end; i++) if (inorder[i] == target) return i;
    return -1;
}

void postOrderTraversalHelper(vector<int>& inorder, vector<int>& preorder, int start, int end, int& index){
    if (start > end) return; // Base case: if the start index is greater than the end index

    int currentValue = preorder[index];
    index++; // Move to the next value in the preorder list
    
    // If it's a leaf node (start == end), print the node's data
    if (start == end){
        cout << currentValue << " ";
        return;
    }

    // Find the position of the current value in the inorder list
    int position = findIndex(inorder, start, end, currentValue);

    // Recursively call the helper for the left subtree
    postOrderTraversalHelper(inorder, preorder, start, position - 1, index);

    // Recursively call the helper for the right subtree
    postOrderTraversalHelper(inorder, preorder, position + 1, end, index);

    // After traversing both subtrees, print the current node's value
    cout << currentValue << " ";
}

void printPostOrder(vector<int>& inorder, vector<int>& preorder) {
    int index = 0;
    postOrderTraversalHelper(inorder, preorder, 0, inorder.size() - 1, index);
}



//{ Driver Code Starts.

int main() {
    int T;
    cin >> T;
    while (T--) {
        int N;
        cin >> N;
        vector<int> in(N);
        vector<int> pre(N);
        for (int i = 0; i < N; i++)
            cin >> in[i];
        for (int i = 0; i < N; i++)
            cin >> pre[i];
        printPostOrder(in, pre);
        cout << endl;

        cout << "~"
             << "\n";
    }
}

// } Driver Code Ends