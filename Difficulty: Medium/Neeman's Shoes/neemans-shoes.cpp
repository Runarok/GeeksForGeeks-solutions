//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution {
    #define p pair<int, int> // Define pair type for easier use with priority queue
    public:
    string exercise(int N, int M, vector<vector<int>> A, int src, int dest, int X){
        // Initialize visited nodes and distance array
        vector<bool> visited(N, false);
        vector<int> dist(N, INT_MAX);
        
        // Create adjacency list
        vector<vector<pair<int, int>>> adj(N);
        for(int i = 0; i < M; i++) {
            adj[A[i][0]].push_back({A[i][1], A[i][2]});
            adj[A[i][1]].push_back({A[i][0], A[i][2]});
        }
        
        // Priority queue to implement Dijkstra's algorithm
        priority_queue<p, vector<p>, greater<p>> pq;
        pq.push({0, src});
        dist[src] = 0;
        
        // Main Dijkstra loop to find shortest path
        while(!pq.empty()) {
            int d = pq.top().first;
            int node = pq.top().second;
            pq.pop();
            
            // Skip if the node is already visited
            if(visited[node]) continue;
            visited[node] = true;
            
            // Update distances for neighboring nodes
            for(auto itr: adj[node]) {
                int newDist = d + itr.second;
                if(dist[itr.first] > newDist) {
                   dist[itr.first] = newDist;
                   pq.push({dist[itr.first], itr.first});
                }
            }
            if(node == dest) break;
        }
        
        // Check if the shortest path is within the allowed distance
        if(dist[dest] > X) {
            return "Neeman's Wool Joggers"; // If path is longer than X, return Wool Joggers
        }
        return "Neeman's Cotton Classics"; // If path is within X, return Cotton Classics
    }
};



//{ Driver Code Starts.

int main(){
    int T;
    cin >> T;
    while(T--){
        int N, M, src, dest, X;
        cin >> N >> M >> src >> dest >> X;
        vector<vector<int>> A(M, vector<int> (3, 0));
        for(int i = 0; i < M; i++){
            cin >> A[i][0] >> A[i][1] >> A[i][2];
        }
        Solution obj;
        cout << obj.exercise(N, M, A, src, dest, X) << "\n";
    
cout << "~" << "\n";
}
}

// } Driver Code Ends