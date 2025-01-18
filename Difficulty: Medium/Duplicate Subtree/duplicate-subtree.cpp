//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

struct Node
{
	char data;
	struct Node *left;
	struct Node *right;

	Node(char x) {
		data = x;
		left = NULL;
		right = NULL;
	}
};

struct Node* buildTree(string str)
{
	// Corner Case
	if (str.length() == 0 || str[0] == 'N')
		return NULL;

	// Creating vector of strings from input
	// string after spliting by space
	vector<string> ip;

	istringstream iss(str);
	for (string str; iss >> str; )
		ip.push_back(str);

	// Create the root of the tree
	Node *root = new Node(stoi(ip[0]));

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

			// Create the right child for the current node
			currNode->right = new Node(stoi(currVal));

			// Push it to the queue
			queue.push(currNode->right);
		}
		i++;
	}

	return root;
}


// } Driver Code Ends
/*The structure of the Binary Tree Node  is
struct Node
{
  char data;
  struct Node* left;
  struct Node* right;
};*/

class Solution {
  public:
    /*This function returns true if the tree contains 
    a duplicate subtree of size 2 or more else returns false*/
    unordered_map<string, int> map;
    
    string dupSubHelper(Node *root, vector<Node*> &res) {
        if (!root) return "#";
        
        // this condition will avoid generating the string for leaves
        // ex for any leaf node: ##5, 5 is leaf node
        // as we don't need to check duplicate sub-trees of size two or more
        if (!root->left && !root->right) return to_string(root->data);
        
        string s = dupSubHelper(root->left, res) + ',' 
            + dupSubHelper(root->right, res) + ',' + to_string(root->data);
        
        // for every node we are storing the post order traversal string
        map[s]++;
        
        // check if we have more than one same strings, and push that root to res
        if (map[s] >= 2) res.push_back(root);
        
        return s;
    }
    
    int dupSub(Node *root) {
        vector<Node*> res;
        
        // this function will return us the roots of all duplicate trees
        dupSubHelper(root, res);
        
        if (res.size()) return 1;
        
        return 0;
    }
};

//{ Driver Code Starts.

int main()
{
	
	int t;
	cin >> t;
	//cout << t << "\n";
	while (t--)
	{
		string treeString;
		getline(cin >> ws, treeString);
		struct Node* root = buildTree(treeString);
		Solution ob;
		cout << ob.dupSub(root) << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends