//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;
#define MAX_HEIGHT 100000

// Tree Node
struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};




// } Driver Code Ends

// User function Template for C++

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
    // Function to find the sum of all nodes vertically below the target node in BST
    long long int verticallyDownBST(Node *root, int target) {
        Node* curr = root;
        
        // Traverse the BST to find the target node
        while (curr) {
            if (curr->data == target) {
                return calculateVerticalSum(curr);
            }
            if (curr->data > target) {
                curr = curr->left;  // Move left if target is smaller
            } else {
                curr = curr->right; // Move right if target is greater
            }
        }
        
        return -1; // Return -1 if target node is not found
    }

private:
    // Helper function to calculate sum of nodes that are vertically below the given node
    long long int calculateVerticalSum(Node* root) {
        long long int sum = 0;
        queue<pair<Node*, int>> q;
        q.push({root, 0}); // Start from the given root with horizontal distance 0

        while (!q.empty()) {
            Node* node = q.front().first;
            int hd = q.front().second; // Horizontal distance from the target node
            q.pop();

            // Sum only the nodes that are directly below the target node (same vertical line)
            if (node != root && hd == 0) {
                sum += node->data;
            }

            // Traverse left and decrease horizontal distance
            if (node->left) {
                q.push({node->left, hd - 1});
            }

            // Traverse right and increase horizontal distance
            if (node->right) {
                q.push({node->right, hd + 1});
            }
        }

        return sum;
    }
};

//{ Driver Code Starts.

// Function to Build Tree
Node* buildTree(string str)
{
   // Corner Case
   if(str.length() == 0 || str[0] == 'N')
       return NULL;

   // Creating vector of strings from input
   // string after spliting by space
   vector<string> ip;

   istringstream iss(str);
   for(string str; iss >> str; )
       ip.push_back(str);

   // Create the root of the tree
   Node* root = new Node(stoi(ip[0]));

   // Push the root to the queue
   queue<Node*> queue;
   queue.push(root);

   // Starting from the second element
   int i = 1;
   while(!queue.empty() && i < ip.size()) {

       // Get and remove the front of the queue
       Node* currNode = queue.front();
       queue.pop();

       // Get the current node's value from the string
       string currVal = ip[i];

       // If the left child is not null
       if(currVal != "N") {

           // Create the left child for the current node
           currNode->left = new Node(stoi(currVal));

           // Push it to the queue
           queue.push(currNode->left);
       }

       // For the right child
       i++;
       if(i >= ip.size())
           break;
       currVal = ip[i];

       // If the right child is not null
       if(currVal != "N") {

           // Create the right child for the current node
           currNode->right = new Node(stoi(currVal));

           // Push it to the queue
           queue.push(currNode->right);
       }
       i++;
   }

   return root;
}

void inorder(Node *root, vector<int> &v)
{
    if(root==NULL)
        return;

    inorder(root->left, v);
    v.push_back(root->data);
    inorder(root->right, v);
}

int main() {
 
   int t;
   string tc;
   getline(cin, tc);
   t=stoi(tc);
   while(t--)
   {
        int target;
        cin>>target;
        string newline;
        getline(cin,newline);
        string s; 
        getline(cin, s);
        Node* root = buildTree(s);
        Solution ob;
        cout<<ob.verticallyDownBST(root, target)<<endl;
   
cout << "~" << "\n";
}
   return 0;
}
// } Driver Code Ends