//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = NULL;
        right = NULL;
    }

    Node *buildTree(string s) {
        if (s.length() == 0 || s[0] == 'N') return NULL;

        // Create the root of the tree
        vector<string> str;
        istringstream iss(s);
        for (string s; iss >> s;) str.push_back(s);
        Node *root = new Node(stoi(str[0]));

        // Push the root to the queue
        queue<Node*> q;
        q.push(root);

        // Starting from the second element
        int i = 1;
        while (q.size() > 0 && i < str.size()) {

            // Get and remove the front of the queue
            Node *currNode = q.front();
            q.pop();

            // Get the current node's value from the string
            string currVal = str[i];

            // If the left child is not null
            if (currVal != "N") {

                // Create the left child for the current node
                currNode->left = new Node(stoi(currVal));
                // Push it to the queue
                q.push(currNode->left);
            }

            // For the right child
            i++;
            if (i >= str.size()) break;

            currVal = str[i];

            // If the right child is not null
            if (currVal != "N") {

                // Create the right child for the current node
                currNode->right = new Node(stoi(currVal));

                // Push it to the queue
                q.push(currNode->right);
            }
            i++;
        }

        return root;
    }

    void inorder(Node *root) {
        if (root == NULL) return;
        inorder(root->left);
        cout<<root->data<<" ";
        inorder(root->right);
    }
};


// } Driver Code Ends
//User function Template for C++

class Solution {
public:
    // Structure to store information about each subtree
    struct SubtreeInfo {
        int minVal;     // Minimum value in the subtree
        int maxVal;     // Maximum value in the subtree
        int sum;        // Sum of all node values in the subtree
        int nodeCount;  // Number of nodes in the subtree
        bool isBST;     // Indicates if the subtree is a valid BST
    };

    int minNodes; // Stores the minimum number of nodes in a valid BST subtree with sum = target

    // Helper function to perform post-order traversal and find the minimum BST subtree
    SubtreeInfo findMinBSTSubtree(Node* root, int target) {
        if (!root) {
            // Base case: If the node is null, return an empty subtree
            return {INT_MAX, INT_MIN, 0, 0, true};
        }

        // Recursively process left and right subtrees
        SubtreeInfo left = findMinBSTSubtree(root->left, target);
        SubtreeInfo right = findMinBSTSubtree(root->right, target);

        // Compute subtree properties for the current node
        int currentSum = left.sum + right.sum + root->data;
        int currentNodeCount = left.nodeCount + right.nodeCount + 1;
        int currentMin = min(root->data, left.minVal);
        int currentMax = max(root->data, right.maxVal);

        // Check if the current subtree is a BST
        bool isCurrentBST = left.isBST && right.isBST &&
                            (root->data > left.maxVal) && (root->data < right.minVal);

        // If the subtree is a valid BST and has the required sum, update minNodes
        if (isCurrentBST && currentSum == target) {
            minNodes = min(minNodes, currentNodeCount);
        }

        // Return the computed information for the current subtree
        return {currentMin, currentMax, currentSum, currentNodeCount, isCurrentBST};
    }

    // Main function to find the minimum number of nodes in a BST subtree with sum equal to target
    int minSubtreeSumBST(int target, Node *root) {
        minNodes = INT_MAX; // Initialize with a large value
        findMinBSTSubtree(root, target);

        // If no valid BST subtree is found, return -1
        return (minNodes == INT_MAX) ? -1 : minNodes;
    }
};



//{ Driver Code Starts.


int main(){
    
    int t;
    cin>>t;
    while(t--){
        int target;
        cin>>target;
        string str;
        getline(cin,str);
        getline(cin,str);
        Node node(0);
        Node *root = node.buildTree(str);
        Solution ob;
        int res = ob.minSubtreeSumBST(target, root);
        cout<<res<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends