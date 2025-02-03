//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

/* A binary tree node has data, pointer to left child
   and a pointer to right child */
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};
Node* newNode(int val) {
    Node* temp = new Node;
    temp->data = val;
    temp->left = NULL;
    temp->right = NULL;
    return temp;
}
Node* buildTree(string str) {
    // Corner Case
    if (str.length() == 0 || str[0] == 'N') return NULL;

    // Creating vector of strings from input
    // string after spliting by space
    vector<string> ip;

    istringstream iss(str);
    for (string str; iss >> str;) ip.push_back(str);

    // Create the root of the tree
    Node* root = newNode(stoi(ip[0]));

    // Push the root to the queue
    queue<Node*> queue;
    queue.push(root);

    // Starting from the second element
    int i = 1;
    while (!queue.empty() && i < ip.size()) {

        // Get and remove the front of the queue
        Node* currNode = queue.front();
        queue.pop();

        // Get the current node's value from the string
        string currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode->left = newNode(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->left);
        }

        // For the right child
        i++;
        if (i >= ip.size()) break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

            // Create the right child for the current node
            currNode->right = newNode(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->right);
        }
        i++;
    }

    return root;
}


// } Driver Code Ends
//User function Template for C++
class Solution {
  public:
    // Helper function to calculate the largest subtree sum.
    int findLargestSubtreeSumUtil(Node* root, int& ans) {
        // If the current node is null, return 0 to the parent node.
        if (root == NULL)    
            return 0;
        
        // Calculate the sum of the current subtree.
        int currSum = root->data +
                      findLargestSubtreeSumUtil(root->left, ans) +
                      findLargestSubtreeSumUtil(root->right, ans);
        
        // Update the answer if the current subtree sum is greater than the previous maximum.
        ans = max(ans, currSum);
        
        // Return the current subtree sum to the parent node.
        return currSum;
    }

    // Function to find the largest subtree sum.
    int findLargestSubtreeSum(Node* root) {
        // If the root is null, the sum is 0.
        if (root == NULL)    
            return 0;

        // Variable to store the maximum subtree sum.
        int ans = INT_MIN;

        // Call the helper function to compute the maximum subtree sum.
        findLargestSubtreeSumUtil(root, ans);

        // Return the largest subtree sum found.
        return ans;
    }
};


//{ Driver Code Starts.

/* Driver program to test size function*/
int main() {
    int t;
    scanf("%d\n", &t);
    while (t--) {
        string s;
        getline(cin, s);
        Node* root = buildTree(s);
        Solution ob;
        cout << ob.findLargestSubtreeSum(root) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends