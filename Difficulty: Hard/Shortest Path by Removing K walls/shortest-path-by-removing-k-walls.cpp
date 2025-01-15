//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

//User function Template for C++

class Solution 
{
   vector<vector<int>>directions={{0,1},{0,-1},{1,0},{-1,0}};
  public:
    int shotestPath(vector<vector<int>> mat, int n, int m, int k) 
    {
        
        if(mat[0][0]==1 && k==0)
        return -1;
        vector<vector<int>>distance(n,vector<int>(m,INT_MAX));
        queue<pair<int,pair<int,int>>>q;

        distance[0][0]=mat[0][0];
        q.push({mat[0][0],{0,0}});
        int level=0;
        while(!q.empty())
        {
            
            int size=q.size();
            while(size>0)
            {
            auto curr=q.front();
            q.pop();
            int obscount=curr.first;
            int i=curr.second.first;
            int j=curr.second.second;
            if(i==n-1 && j==m-1)
            return level;
            
           
            
            // if(obscount>k)
            // continue;
            
            for(auto &it:directions)
            {
                int x=i+it[0];
                int y=j+it[1];
                if(x<0 || y<0 || x>=n || y>=m)
                continue;
                
                int newobstacles=mat[x][y]+distance[i][j];
                if(newobstacles<=k && newobstacles<distance[x][y])
                {
                distance[x][y]=newobstacles;
                q.push({distance[x][y],{x,y}});
                }
            
                    
            }
            
            size--;
            }
            level++;
        }
        
        return -1;
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m, k, x;
        
        cin>>n>>m>>k;
        vector<vector<int>> mat;
    
        for(int i=0; i<n; i++)
        {
            vector<int> row;
            for(int j=0; j<m; j++)
            {
                cin>>x;
                row.push_back(x);
            }
            mat.push_back(row);
        }

        Solution ob;
        cout<<ob.shotestPath(mat,n,m,k);
        cout<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends