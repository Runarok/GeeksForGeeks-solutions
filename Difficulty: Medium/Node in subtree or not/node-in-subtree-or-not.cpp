//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++

class Solution {
    public:
        // Helper function to check if node 'b' is in the subtree of node 'a'
        bool isParent(int a, int b, vector<int>& Par) {
            if (b == 1) return true; // If b is the root, it's always true
            if (a == 1 || a == -1) return false; // If a is the root or no parent exists, it's false
            if (a == b) return true; // If a is equal to b, b is a parent of itself
            return isParent(Par[a], b, Par); // Recursively check the parent of a
        }

        // Main function to process the queries
        vector<string> isInSubtree(vector<vector<int>>& g, int n, int q, vector<vector<int>> queries) {
            // Initialize adjacency list and variables
            vector<vector<int>> Adj = g;
            int m = g.size();
            
            // Create a visited array and queue for BFS
            vector<int> Vis(n + 1, 0);
            queue<int> q1;
            q1.push(1); // Start BFS from the root (node 1)
            
            // Initialize parent array to store the parent of each node
            vector<int> Par(n + 1, -1);
            
            // BFS to compute the parent of each node
            while (!q1.empty()) {
                int node = q1.front();
                q1.pop();
                Vis[node] = 1;
                
                for (int i = 0; i < Adj[node].size(); i++) {
                    int neighbor = Adj[node][i];
                    if (Vis[neighbor] != 1) {
                        Vis[neighbor] = 1;
                        Par[neighbor] = node;
                        q1.push(neighbor);
                    }
                }
            }

            // Vector to store the results of queries
            vector<string> ans;
            for (int i = 0; i < q; i++) {
                int a = queries[i][0];
                int b = queries[i][1];
                
                // Check if b is in the subtree of a
                if (isParent(a, b, Par)) ans.push_back("YES");
                else ans.push_back("NO");
            }
            return ans; // Return the result for all queries
        }
};



//{ Driver Code Starts.

int main()
{
    
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<vector<int>> g(n+1);
        for(int i=1;i<n;i++)
        {
            int a,b;
            cin>>a>>b;
            g[a].push_back(b);
            g[b].push_back(a);
        }
        int q;
        cin>>q;
        vector <vector<int>> queries(q,vector<int> (2));
        for(auto &j:queries)
            cin>>j[0]>>j[1];
        
        Solution s;
        vector<string> ans=s.isInSubtree(g,n,q,queries);
        for(auto j:ans)
            cout<<j<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends