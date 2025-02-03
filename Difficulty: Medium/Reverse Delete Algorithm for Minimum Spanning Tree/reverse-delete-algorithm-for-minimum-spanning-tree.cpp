//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to remove an edge from the adjacency list
    void removeEdge(vector<vector<int>> &adj, int u, int v) {
        // Remove v from u's adjacency list
        for (int i = 0; i < adj[u].size(); i++) {
            if (adj[u][i] == v) {
                adj[u].erase(adj[u].begin() + i);
                break;
            }
        }
        // Remove u from v's adjacency list
        for (int i = 0; i < adj[v].size(); i++) {
            if (adj[v][i] == u) {
                adj[v].erase(adj[v].begin() + i);
                break;
            }
        }
    }

    // DFS traversal to mark all connected nodes
    void dfs(int start, vector<bool> &visited, vector<vector<int>> &adj) {
        visited[start] = true;
        // Explore all the adjacent nodes
        for (int i = 0; i < adj[start].size(); i++) {
            if (!visited[adj[start][i]]) {
                dfs(adj[start][i], visited, adj);
            }
        }
    }

    // Function to check if the graph is connected
    bool isConnected(int V, vector<vector<int>> &adj) {
        vector<bool> visited(V, false);
        dfs(0, visited, adj);
        // If any node is unvisited, the graph is not connected
        for (int i = 1; i < V; i++) {
            if (!visited[i]) {
                return false;
            }
        }
        return true;
    }

    // Function to calculate the weight of the Minimum Spanning Tree (MST)
    int RevDelMST(int Arr[], int V, int E) {
        vector<vector<int>> adj(V);

        // Build the adjacency list from the input edges
        for (int i = 0; i < 3 * E; i += 3) {
            adj[Arr[i]].push_back(Arr[i + 1]);
            adj[Arr[i + 1]].push_back(Arr[i]);
        }

        // Create a list of edges with weights
        vector<pair<int, pair<int, int>>> edges;
        for (int i = 0; i < 3 * E; i += 3) {
            edges.push_back({Arr[i + 2], {Arr[i + 1], Arr[i]}});
        }

        int mstWeight = 0;
        sort(edges.begin(), edges.end());

        // Reverse delete edges and check connectivity
        for (int i = edges.size() - 1; i >= 0; i--) {
            int u = edges[i].second.first;
            int v = edges[i].second.second;
            removeEdge(adj, u, v);

            // If removing the edge disconnects the graph, restore it
            if (!isConnected(V, adj)) {
                adj[u].push_back(v);
                adj[v].push_back(u);
                mstWeight += edges[i].first;
            }
        }
        return mstWeight;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int V,E;
        cin>>V>>E;

        int Arr[3*E];
        for(int i=0; i<3*E; i++)
            cin>>Arr[i];

        Solution ob;
        cout << ob.RevDelMST(Arr,V,E) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends