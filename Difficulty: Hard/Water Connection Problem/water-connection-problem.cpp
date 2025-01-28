//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

struct Node {
    int prnt; // Stores the parent of the node
    int chld; // Stores the child of the node
    int dia;  // Stores the diameter of the pipe
    Node() {
        prnt = chld = dia = -1; // Initialize all values to -1
    }
};

class Solution {
public:
    // Function to solve the problem and return the result
    vector<vector<int>> solve(int n, int p, vector<int> a, vector<int> b, vector<int> d) {
        vector<Node> gr(n + 1); // Graph representation using Node struct

        // Fill the graph structure based on input connections
        for (int i = 0; i < p; i++) {
            gr[a[i]].chld = b[i]; // Set the child node
            gr[a[i]].dia = d[i];  // Set the diameter of the pipe
            gr[b[i]].prnt = a[i]; // Set the parent node
        }

        vector<vector<int>> ans; // Stores the final output

        // Traverse all nodes to identify independent pipes
        for (int i = 1; i <= n; i++) {
            int dia = INT_MAX; // Initialize diameter as maximum value

            // If the node is a starting point (no parent)
            if (gr[i].prnt == -1) {
                // Skip isolated nodes without children
                if (gr[i].chld == -1) continue;

                int x = i; // Start from the current node
                // Traverse through the chain of nodes
                while (gr[x].chld != -1) {
                    dia = min(dia, gr[x].dia); // Update the minimum diameter
                    x = gr[x].chld;           // Move to the next node in the chain
                }

                // Store the result for this chain
                ans.push_back({i, x, dia});
            }
        }

        return ans; // Return the list of pipe connections
    }
};


//{ Driver Code Starts.
int main()
{
	int t,n,p;
	cin>>t;
	while(t--)
    {
        cin>>n>>p;
        vector<int> a(p),b(p),d(p);
        for(int i=0;i<p;i++){
            cin>>a[i]>>b[i]>>d[i];
        }
        Solution obj;
        vector<vector<int>> answer = obj.solve(n,p,a,b,d);
        cout<<answer.size()<<endl;
        for(auto i:answer)
        {
            cout<<i[0]<<" "<<i[1]<<" "<<i[2]<<endl;
        }
        
    
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends