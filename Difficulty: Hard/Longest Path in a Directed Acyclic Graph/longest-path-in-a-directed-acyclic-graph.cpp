//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++

class Solution
{
    public:
      vector <int> maximumDistance(vector<vector<int>> edges,int v,int e,int src)
      {
            // code here
            vector<vector<int>> graph[v];
            
            for(auto it : edges){
                int u = it[0];
                int v = it[1];
                int w = it[2];
                graph[u].push_back({v , w});
            }
            
            
            queue<pair<int , int>> q;
            q.push({src , 0});
            
            vector<int> vis(v , 0);
            vis[src] = 1;
            
            vector<int> dist(v , INT_MIN);
            dist[src] = 0;
            
            while(!q.empty()){
                int node = q.front().first;
                int dis = q.front().second;
                q.pop();
                
                for(auto it : graph[node]){
                    int wt = it[1];
                    int adjnode = it[0];
                    
                    if(dist[node] + wt > dist[adjnode]){
                        dist[adjnode] = dist[node] + wt;
                        q.push({adjnode , dist[adjnode]});
                    }
                }
                
            }
            
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