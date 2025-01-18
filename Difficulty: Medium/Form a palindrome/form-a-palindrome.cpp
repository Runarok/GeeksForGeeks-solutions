//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function template for C++

class Solution {
public:
    int countMin(string str) {
        int n = str.size();
        
        // Create a 2D DP array to store the lengths of the longest palindromic subsequences
        vector<vector<int>> dp(n, vector<int>(n, 0));
        
        // A single character is always a palindrome of length 1
        for (int i = 0; i < n; i++) {
            dp[i][i] = 1;
        }
        
        // Fill the DP table
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                
                if (str[i] == str[j]) {
                    dp[i][j] = dp[i+1][j-1] + 2;
                } else {
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        
        // The length of the longest palindromic subsequence is dp[0][n-1]
        int lpsLength = dp[0][n-1];
        
        // The minimum insertions required to make the string a palindrome
        return n - lpsLength;
    }
};


//{ Driver Code Starts.
int main(){
    int t;
    cin >> t;
    while(t--){
        string str;
        cin >> str;
        Solution ob;
        cout << ob.countMin(str) << endl;
    
cout << "~" << "\n";
}
return 0;
}


// } Driver Code Ends