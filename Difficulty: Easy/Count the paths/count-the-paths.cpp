//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    
    int cnt = 0;  // Counter to track the number of possible paths
    
    // Recursive function for DFS traversal
    void DFSrec(vector<vector<int>> &adj, int s, int des)
    {
        // If the current node is the destination, increment the path count
        if (s == des)
        {
            cnt++;
        }
        else
        {
            // Traverse all neighbors of the current node
            for (int x : adj[s])
            {
                DFSrec(adj, x, des);  // Recursively visit the neighbors
            }
        }
    }

    // Function to calculate the number of possible paths from start to destination
    int possible_paths(vector<vector<int>> &edges, int n, int start, int des)
    {
        vector<vector<int>> adj(n);  // Adjacency list to store the graph
        vector<bool> visited(n, false);  // Vector to keep track of visited nodes (not used here)
        
        // Construct the adjacency list from the given edges
        for (auto &edge : edges)
        {
            adj[edge[0]].push_back(edge[1]);
        }
        
        // Call DFS recursive function to find the paths
        DFSrec(adj, start, des);
        
        // Return the total number of paths found
        return cnt;
    }
};

//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n, m, s, d;
        cin >> n >> m >> s >> d;
        vector<vector<int>> edges;
        for (int i = 0; i < m; i++) {
            int u, v;
            cin >> u >> v;
            edges.push_back({u, v});
        }
        Solution obj;
        int ans = obj.possible_paths(edges, n, s, d);
        cout << ans << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends