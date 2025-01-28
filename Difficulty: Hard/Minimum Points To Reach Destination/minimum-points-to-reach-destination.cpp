//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int minPoints(int m, int n, vector<vector<int>> points) {
        // Initialize DP table
        vector<vector<int>> dp(m, vector<int>(n));
        
        // Start from the bottom-right corner
        dp[m-1][n-1] = (points[m-1][n-1] > 0 ? 0 : -points[m-1][n-1] + 1);
        
        // Fill the last row (from right to left)
        for (int j = n - 2; j >= 0; j--) {
            if (points[m-1][j] > dp[m-1][j+1]) {
                dp[m-1][j] = 0;
            } else {
                dp[m-1][j] = (dp[m-1][j+1] == 0) ? 1 - points[m-1][j] : dp[m-1][j+1] - points[m-1][j];
            }
        }
        
        // Fill the last column (from bottom to top)
        for (int i = m - 2; i >= 0; i--) {
            if (points[i][n-1] > dp[i+1][n-1]) {
                dp[i][n-1] = 0;
            } else {
                dp[i][n-1] = (dp[i+1][n-1] == 0) ? 1 - points[i][n-1] : dp[i+1][n-1] - points[i][n-1];
            }
        }
        
        // Fill the rest of the DP table (bottom-up, right-left)
        for (int i = m - 2; i >= 0; i--) {
            for (int j = n - 2; j >= 0; j--) {
                int temp = min(dp[i+1][j], dp[i][j+1]);
                if (points[i][j] > temp) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = (temp == 0) ? 1 - points[i][j] : temp - points[i][j];
                }
            }
        }

        return (dp[0][0] == 0) ? 1 : dp[0][0];
    }
};

//{ Driver Code Starts.
int main() 
{
   
   	int t;
    cin >> t;
    while (t--)
    {
        int m, n;
        cin >> m >> n;

        vector<vector<int>> a(m, vector<int>(n));

        for(int i = 0; i < m; i++)
        	for(int j = 0; j < n; j++)
        		cin >> a[i][j];

        

	    Solution ob;
	    cout << ob.minPoints(m,n,a) << "\n";
	     
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends