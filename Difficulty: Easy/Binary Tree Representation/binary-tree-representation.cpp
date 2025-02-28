//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;

struct node {
  int data;
  struct node *left;
  struct node *right;
};

struct node *newNode(int data) {
  struct node *node = (struct node *)malloc(sizeof(struct node));

  node->data = data;

  node->left = NULL;
  node->right = NULL;
  return (node);
}

void traverseInOrder(struct node *temp, vector<int> &inorder) {

  if (temp != NULL) {
    traverseInOrder(temp->left,inorder);
    // cout << " " << temp->data;
    inorder.push_back(temp->data);
    traverseInOrder(temp->right,inorder);
  }
  return;
}


// } Driver Code Ends

class Solution {
public:

    // Function to create a binary tree from the given vector of node values
    // Approach:
    // 1. The first value in the vector is assigned to the root node.
    // 2. The remaining values are used to populate the left and right children 
    //    using a queue to maintain the current node.
    void create_tree(node* root0, vector<int> &vec) {
        // If the vector is empty, return as there's no tree to create
        if (vec.size() == 0) {
            return;
        }
        
        // Assign the first value in the vector to the root node
        root0->data = vec[0];
        
        // Initialize a queue to facilitate level-order traversal
        queue<node*> q1;
        q1.push(root0);  // Push the root node into the queue
        
        int index = 1;  // Start from the second element in the vector
        
        // Traverse and build the tree while there are remaining elements in the vector
        while (index < vec.size()) {
            // Pop the front element from the queue
            node* curr = q1.front();
            q1.pop();
            
            // Check if a left child can be assigned
            if (index < vec.size()) {
                node* L = new node{vec[index]};  // Create a new left node
                curr->left = L;  // Link the left child
                q1.push(L);  // Push the left child into the queue
            }
            index++;  // Move to the next index for the right child
            
            // Check if a right child can be assigned
            if (index < vec.size()) {
                node* R = new node{vec[index]};  // Create a new right node
                curr->right = R;  // Link the right child
                q1.push(R);  // Push the right child into the queue
            }
            index++;  // Move to the next index for the next iteration
        }

        return;
    }
};



//{ Driver Code Starts.
int main(){
    int t = 1;
    cin >> t;

    // freopen ("output_gfg.txt", "w", stdout);

    while(t--){
        //Input
        vector<int> vec(7);
        for(int i = 0;i<7;i++){
            cin >> vec[i];
        }
        struct node *root0 = newNode(vec[0]);
        root0->left = newNode(vec[1]);
        root0->right = newNode(vec[2]);
        root0->left->left = newNode(vec[3]);
        root0->left->right = newNode(vec[4]);
        root0->right->left = newNode(vec[5]);
        root0->right->right = newNode(vec[6]);

        Solution obj;
        struct node *root = newNode(vec[0]);
        obj.create_tree(root, vec);

        vector<int> a;
        traverseInOrder(root0,a);
        vector<int> b;
        traverseInOrder(root,b);
        if(a == b) cout << 1 << endl;
        else cout << -1 << endl;

       
        

        
        // cout << "~\n";
    
cout << "~" << "\n";
}
    // fclose(stdout);

    return 0;
}

// } Driver Code Ends