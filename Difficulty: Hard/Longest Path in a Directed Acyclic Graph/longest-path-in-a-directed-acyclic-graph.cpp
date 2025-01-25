//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution
{
    public:
      vector <int> maximumDistance(vector<vector<int>> edges, int v, int e, int src)
      {
            // Create an adjacency list representation of the graph
            vector<vector<int>> graph[v];
            
            // Populate the graph with edges (u, v, w)
            for(auto it : edges){
                int u = it[0];    // Starting node of the edge
                int v = it[1];    // Ending node of the edge
                int w = it[2];    // Weight of the edge
                graph[u].push_back({v, w}); // Add edge from u to v with weight w
            }
            
            // Create a queue for BFS, starting from the source node
            queue<pair<int, int>> q;
            q.push({src , 0}); // Push the source node with initial distance 0
            
            // Vector to mark visited nodes
            vector<int> vis(v, 0);
            vis[src] = 1; // Mark the source node as visited
            
            // Initialize the distance vector with negative infinity for all nodes
            // except for the source node which is initialized to 0
            vector<int> dist(v, INT_MIN);
            dist[src] = 0;
            
            // Perform BFS to find the maximum distance from the source node
            while(!q.empty()){
                int node = q.front().first;  // Current node
                int dis = q.front().second;  // Current distance
                q.pop(); // Remove the front element from the queue
                
                // Explore all adjacent nodes (neighbors)
                for(auto it : graph[node]){
                    int wt = it[1];      // Weight of the edge
                    int adjnode = it[0]; // Adjacent node
                    
                    // If a greater distance is found, update the distance for the adjacent node
                    if(dist[node] + wt > dist[adjnode]){
                        dist[adjnode] = dist[node] + wt; // Update the distance to the adjacent node
                        q.push({adjnode , dist[adjnode]}); // Push the adjacent node and its updated distance to the queue
                    }
                }
                
            }
            
            // Return the distance array which contains the maximum distance from the source node
            return dist;
      }
};

//{ Driver Code Starts.

int main() {
  
    int t;
    cin>>t;
    while(t--)
    {

        int v,e;
        cin>>v>>e;
     
        int src;
        cin>>src;
        vector<vector<int>> edges(e,vector<int> (3));
        for(auto &j:edges)
          cin>>j[0]>>j[1]>>j[2];

        Solution s;
        vector <int> ans=s.maximumDistance(edges,v,e,src);
        for(auto j:ans)
        {
            if(j==INT_MIN)
              cout<<"INF ";
            else
              cout<<j<<" ";
        }
        cout<<endl;
    
cout << "~" << "\n";
} 
    return 0;
 
}
// } Driver Code Ends
