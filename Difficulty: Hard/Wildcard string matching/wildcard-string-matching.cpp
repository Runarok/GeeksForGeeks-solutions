//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function template for C++
class Solution {
public:
    bool match(string wild, string pattern) {
        int m = wild.length();
        int n = pattern.length();
        
        // DP table to store results of subproblems
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));

        // Base case: empty wild matches empty pattern
        dp[0][0] = true;

        // Fill the first row (wild is empty)
        for (int i = 1; i <= m; i++) {
            if (wild[i - 1] == '*') {
                dp[i][0] = dp[i - 1][0]; // * can match empty string
            }
        }

        // Fill the rest of the DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (wild[i - 1] == pattern[j - 1] || wild[i - 1] == '?') {
                    dp[i][j] = dp[i - 1][j - 1]; // Exact match or '?' match
                } else if (wild[i - 1] == '*') {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' matches empty or more characters
                }
            }
        }

        // Return the result in the bottom-right corner of the DP table
        return dp[m][n];
    }
};


//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t-->0)
    {
        string wild, pattern;
        cin>>wild>>pattern;
        
        Solution ob;
        bool x=ob.match(wild, pattern);
        if(x)
        cout<<"Yes\n";
        else
        cout<<"No\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends