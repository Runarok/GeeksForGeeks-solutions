//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
  
  // Disjoint Set Union (DSU) class to manage the union-find operations
  class DSU{
    public:
    int n;
    vector<int> parent, rank;
    
    // Constructor to initialize the parent and rank vectors
    DSU(int n){
        parent.resize(n, 0);
        rank.resize(n, 0);
        for(int i = 0; i < n; i++) parent[i] = i; // Initially, each node is its own parent
    }
    
    // Find operation with path compression
    int find(int node){
        if(node == parent[node]) return node; // Node is its own parent
        return parent[node] = find(parent[node]); // Path compression
    }
    
    // Union operation with union by rank
    void Compression(int a, int b){
        int u = find(a), v = find(b);
        if(u == v) return; // If already in the same set, no union needed
        
        // Union by rank: Attach the smaller tree to the root of the larger tree
        if(rank[u] < rank[v]){
            parent[u] = v;
        }
        else if(rank[v] < rank[u]){
            parent[v] = u;
        }
        else{
            parent[u] = v;
            rank[v]++; // Increase the rank of the new root
        }
    }
  };
  
  // Function to find the Minimum Spanning Tree (MST) using Kruskal's algorithm
  int kruskalsMST(int V, vector<vector<int>> &edges) {
      DSU ds(V); // Create DSU for V vertices
      vector<vector<int>> edgeList;
      
      // Convert edge list to include weights as the first element
      for(auto i : edges){
          edgeList.push_back({i[2], i[0], i[1]}); // Format: {weight, node1, node2}
      }
      
      int sum = 0;
      
      // Sort the edges in non-decreasing order of weights
      sort(edgeList.begin(), edgeList.end());
      
      // Iterate through the edges and apply the union-find
      for(auto i : edgeList){
          // If nodes are not connected, include this edge in MST and union the sets
          if(ds.find(i[1]) != ds.find(i[2])){
              ds.Compression(i[1], i[2]);
              sum += i[0]; // Add the edge weight to the total MST weight
          }
      }
      
      // Return the total weight of the MST
      return sum;
  }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int V, E;
        cin >> V >> E;
        vector<vector<int>> edges;
        int i = 0;
        while (i++ < E) {
            int u, v, w;
            cin >> u >> v >> w;
            edges.push_back({u, v, w});
        }

        Solution obj;
        cout << obj.kruskalsMST(V, edges) << "\n";
        cout << "~\n";
    }

    return 0;
}

// } Driver Code Ends