//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


int longest_route(vector<vector<int>> &arr, int n);

int main() {
    
    int t;cin>>t;
    while(t--)
    {
        int n;cin>>n;
        
        vector<vector<int>> arr(n-1);
        for(int i=0;i<n-1;i++){
            int a, b, c;
            cin>> a>> b >> c;
            arr[i].push_back(a);
            arr[i].push_back(b);
            arr[i].push_back(c);
        }
        
        cout << longest_route(arr, n) << endl;
        
    
cout << "~" << "\n";
}

	return 0;
}
// } Driver Code Ends

unordered_map<int, int> vis;  // Map to track visited nodes
int src = 1;  // Source node for longest path
int ans = 0;  // Variable to store the longest distance

// Helper function to find the farthest node from the source node
void dfs1(int s, vector<vector<pair<int, int>>> &adj, int x) {
    if (x > ans) {  // If the current distance is greater than the stored max
        ans = x;
        src = s;  // Update source to the farthest node found
    }

    // Explore adjacent nodes
    for (int i = 0; i < adj[s].size(); i++) {
        if (vis[adj[s][i].first] == 0) {  // If node is not visited
            vis[adj[s][i].first] = 1;  // Mark the node as visited
            dfs1(adj[s][i].first, adj, x + adj[s][i].second);  // Recursive DFS call
        }
    }
}

// Helper function to find the longest path starting from a node
int dfs2(int s, vector<vector<pair<int, int>>> &adj) {
    int ans = 0;
    for (int i = 0; i < adj[s].size(); i++) {
        if (vis[adj[s][i].first] == 0) {  // If node is not visited
            vis[adj[s][i].first] = 1;  // Mark the node as visited
            ans = max(ans, adj[s][i].second + dfs2(adj[s][i].first, adj));  // Explore child node and update longest path
        }
    }
    return ans;
}

// Main function to find the longest route in a graph
int longest_route(vector<vector<int>> &arr, int n) {
    vector<vector<pair<int, int>>> adj(n + 1);  // Adjacency list to store graph

    // Build the graph from the input
    for (int i = 0; i < n - 1; i++) {
        adj[arr[i][0]].push_back({arr[i][1], arr[i][2]});
        adj[arr[i][1]].push_back({arr[i][0], arr[i][2]});
    }

    vis.clear();  // Clear visited map
    vis[1] = 1;  // Mark node 1 as visited
    src = 1;
    ans = 0;
    dfs1(1, adj, 0);  // First DFS to find the farthest node
    vis.clear();  // Reset visited map
    vis[src] = 1;  // Mark the farthest node as visited

    return dfs2(src, adj);  // Second DFS to find the longest path from the farthest node
}
