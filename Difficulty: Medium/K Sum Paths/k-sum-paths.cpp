//{ Driver Code Starts
// Initial template for C++

#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};

// Function to Build Tree
Node *buildTree(string str) {
    // Corner Case
    if (str.length() == 0 || str[0] == 'N')
        return NULL;

    // Creating vector of strings from input
    // string after spliting by space
    vector<string> ip;

    istringstream iss(str);
    for (string str; iss >> str;)
        ip.push_back(str);

    // Create the root of the tree
    Node *root = new Node(stoi(ip[0]));

    // Push the root to the queue
    queue<Node *> queue;
    queue.push(root);

    // Starting from the second element
    int i = 1;
    while (!queue.empty() && i < ip.size()) {

        // Get and remove the front of the queue
        Node *currNode = queue.front();
        queue.pop();

        // Get the current Node's value from the string
        string currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current Node
            currNode->left = new Node(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->left);
        }

        // For the right child
        i++;
        if (i >= ip.size())
            break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

            // Create the right child for the current Node
            currNode->right = new Node(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->right);
        }
        i++;
    }

    return root;
}


// } Driver Code Ends

/*
struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};
*/

class Solution {
  public:
    int ans = 0; // Variable to store the count of valid paths

    /**
     * Recursive function to find the number of paths in the tree where the sum of nodes equals k.
     * @param root - Pointer to the current node.
     * @param prefixSumMap - Hash map to store prefix sum frequencies.
     * @param k - Target sum.
     * @param currentSum - Sum of nodes from root to the current node.
     */
    void solve(Node *root, unordered_map<int, int> &prefixSumMap, int k, int currentSum) {
        if (!root) return; // Base case: If node is NULL, return.

        // Update the current sum by adding the current node's value
        currentSum += root->data;

        // Check if there exists a prefix sum such that currentSum - k exists in the map
        if (prefixSumMap.find(currentSum - k) != prefixSumMap.end()) {
            ans += prefixSumMap[currentSum - k]; // Add the count of such paths
        }

        // Store the current prefix sum in the map
        prefixSumMap[currentSum]++;

        // Recursively check left and right subtrees
        solve(root->left, prefixSumMap, k, currentSum);
        solve(root->right, prefixSumMap, k, currentSum);

        // Backtrack: Remove the current sum from the map before returning to the parent node
        prefixSumMap[currentSum]--; 
    }

    /**
     * Function to return the number of paths in the tree where the sum of nodes equals k.
     * @param root - Pointer to the root node of the tree.
     * @param k - Target sum.
     * @return Count of valid paths.
     */
    int sumK(Node *root, int k) {
        unordered_map<int, int> prefixSumMap; // Hash map to store prefix sum frequencies
        prefixSumMap[0] = 1; // Initialize with sum 0 to handle cases where path sum directly equals k
        solve(root, prefixSumMap, k, 0);
        return ans; // Return the count of valid paths
    }
};

//{ Driver Code Starts.

int main() {
    string tc;
    getline(cin, tc);
    int t = stoi(tc);

    while (t--) {
        string s, ch;
        getline(cin, s);
        Node *root = buildTree(s);

        string key;
        getline(cin, key);
        int k = stoi(key);
        Solution ob;
        cout << ob.sumK(root, k) << "\n";
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends