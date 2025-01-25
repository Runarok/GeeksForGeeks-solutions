//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

#include <vector>
#include <algorithm>

class Solution {
    private:
    int mod = 1e9+7;
public:
vector<int> FindWays(vector<vector<int>>&matrix){
    // Code here
    int n = matrix.size(), m = matrix[0].size();
    vector<vector<int>>dp(n, vector<int>(m, 0)); // dp to store total number of ways to reach destination.
    vector<vector<int>>mx(n, vector<int>(m, 0)); // dp to store maximum path sum to target.
    dp[0][0] = 1;
    mx[0][0] = matrix[0][0];
    for(int i = 1; i < n; i++) {
        if(matrix[i - 1][0] == 1) break; // if we cannot reach a cell then there is no point to continue as we started from topmost cell.
        dp[i][0] = 1;
        mx[i][0] = (mx[i - 1][0]%mod + matrix[i][0]%mod)%mod;
    }
    for(int i = 1; i < m; i++) {
        if(matrix[0][i - 1] == 2) break; // same reason
        dp[0][i] = 1;
        mx[0][i] = (mx[0][i - 1]%mod + matrix[0][i]%mod)%mod;
    }
    
    for(int i = 1; i < n; i++) {
        for(int j = 1; j < m; j++) {
            int uw = (matrix[i - 1][j] == 1) ? 0 : dp[i - 1][j]%mod; // if current cell reachable from upper else 0
            int lw = (matrix[i][j - 1] == 2) ? 0 : dp[i][j - 1]%mod;// if current cell reachable from left else 0
            int uv = (matrix[i - 1][j] == 1) ? 0 : mx[i - 1][j]%mod;// if current cell reachable from upper else 0
            int lv = (matrix[i][j - 1] == 2) ? 0 : mx[i][j - 1]%mod;// if current cell reachable from left else 0
            dp[i][j] = (uw+lw)%mod;
            mx[i][j] = max(uv,lv);
            if(mx[i][j] != 0) mx[i][j] = (mx[i][j] + matrix[i][j]%mod)%mod ; // very very important (if last cell is not  reachable then cost should be 0)
        }
    }
    return vector<int>{dp[n - 1][m - 1] ,mx[n - 1][m - 1]};
}
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		vector<vector<int>>matrix(n, vector<int>(n, 0));
		for(int i = 0; i < n; i++){
			for(int j = 0; j < n; j++)
				cin >> matrix[i][j];
		}
		Solution obj;
		vector<int> ans = obj.FindWays(matrix);
		for(auto i: ans)cout << i << " ";
		cout << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends