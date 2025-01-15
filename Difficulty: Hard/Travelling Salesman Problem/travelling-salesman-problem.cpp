//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int tsp(int pos,int mask,int vs,vector<vector<int>>& cost,vector<vector<int>>&dp)
    {
        int n=cost.size();
        if(mask==vs){
            return cost[pos][0];
        }
        if(dp[mask][pos]!=-1){
            return dp[mask][pos];
        }
        int ans=INT_MAX;
        for(int i=0;i<n;i++){
            if((mask&(1<<i))==0){
                int nu=cost[pos][i]+tsp(i,mask|(1<<i),vs,cost,dp);
                ans=min(ans,nu);
            }
        }
        dp[mask][pos]=ans;
        return ans;
    }
    int tsp(vector<vector<int>>& cost) {
        int n=cost.size();
        int vs=(1<<n)-1;
        vector<vector<int>>dp((1<<n)+5,vector<int>(n,-1));
        return tsp(0,1,vs,cost,dp);
    }
};


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n;
        cin >> n;
        vector<vector<int>> cost(n, vector<int>(n, 0));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                cin >> cost[i][j];
        Solution obj;
        int ans = obj.tsp(cost);
        cout << ans << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends