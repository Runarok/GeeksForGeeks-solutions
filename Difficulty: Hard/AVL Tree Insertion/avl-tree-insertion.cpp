//{ Driver Code Starts
//

#include <bits/stdc++.h>
#define MAXN 2000
using namespace std;

struct Node
{
    int data, height;
    Node *left, *right;
    
    Node(int x)
    {
        data=x;
        left=right=NULL;
        height=1;
    }
};

bool isBST(Node *n, int lower, int upper)
{
	if(!n) return 1;
	if( n->data <= lower || n->data >= upper ) return 0;
	return isBST(n->left, lower, n->data) && isBST(n->right, n->data, upper) ;
}

pair<int,bool> isBalanced(Node* n)
{
	if(!n) return pair<int,bool> (0,1);

	pair<int,bool> l = isBalanced(n->left);
	pair<int,bool> r = isBalanced(n->right);

	if( abs(l.first - r.first) > 1 ) return pair<int,bool> (0,0);

	return pair<int,bool> ( 1 + max(l.first , r.first) , l.second && r.second );
}

bool isBalancedBST(Node* root)
{
	if( !isBST(root, INT_MIN, INT_MAX) )
		cout<< "BST voilated, inorder traversal : ";

	else if ( ! isBalanced(root).second )
		cout<< "Unbalanced BST, inorder traversal : ";

	else return 1;
	return 0;
}

void printInorder(Node* n)
{
	if(!n) return;
	printInorder(n->left);
	cout<< n->data << " ";
	printInorder(n->right);
}


// } Driver Code Ends
/* The structure of the Node is
struct Node
{
    int data;
    Node *left;
    Node *right;
    int height;
};
*/

class Solution{
  public:
  // Performs a right rotation on the given subtree rooted at 'y'
  Node* rightRotate(Node* y){
      Node* x = y->left;
      Node* T2 = x->right;

      // Rotate nodes
      x->right = y;
      y->left = T2;

      // Update heights after rotation
      y->height = 1 + max(height(y->left), height(y->right));
      x->height = 1 + max(height(x->left), height(x->right));

      return x;
  }
   
  // Performs a left rotation on the given subtree rooted at 'x'
  Node* leftRotate(Node* x){
      Node* y = x->right;
      Node* T2 = y->left;

      // Rotate nodes
      y->left = x;
      x->right = T2;

      // Update heights after rotation
      x->height = 1 + max(height(x->left), height(x->right));
      y->height = 1 + max(height(y->left), height(y->right));

      return y;
   }
   
   // Returns the height of a node or 0 if the node is null
   int height(Node* N){
       if (N == nullptr) {
           return 0;
       }
       return N->height;
   }
   
   // Calculates the balance factor for a given node
   int getBalance(Node* N){
       if (N == nullptr) {
           return 0;
       }
       return height(N->left) - height(N->right);
   }

   /* Inserts a new value into the AVL tree and balances it if necessary */
   Node* insertToAVL(Node* node, int data)
   {
       // Base case: create a new node if the tree is empty
       if (node == NULL) {
           return new Node(data);
       }

       // Recursively insert data into the left or right subtree
       if (data < node->data) {
           node->left = insertToAVL(node->left, data);
       } else if (data > node->data) {
           node->right = insertToAVL(node->right, data);
       } else {
           return node; // Duplicate values are not allowed
       }

       // Update the height of the current node
       node->height = 1 + max(height(node->left), height(node->right));

       // Get the balance factor to determine if the node is unbalanced
       int balance = getBalance(node);

       // Perform rotations based on the type of imbalance
       if (balance > 1 && data < node->left->data) { // Left-left case
           return rightRotate(node);
       }
       if (balance < -1 && data > node->right->data) { // Right-right case
           return leftRotate(node);
       }
       if (balance > 1 && data > node->left->data) { // Left-right case
           node->left = leftRotate(node->left);
           return rightRotate(node);
       }
       if (balance < -1 && data < node->right->data) { // Right-left case
           node->right = rightRotate(node->right);
           return leftRotate(node);
       }

       // Return the unchanged node pointer
       return node;
   }
};

//{ Driver Code Starts.

int main()
{
	int ip[MAXN];
    
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        
        for(int i=0; i<n; i++)
            cin>> ip[i];
        
        Node* root = NULL;
        Solution obj;
        for(int i=0; i<n; i++)
        {
            root = obj.insertToAVL( root, ip[i] );
            
            if ( ! isBalancedBST(root) )
                break;
        }
        
        printInorder(root);
        cout<< endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends