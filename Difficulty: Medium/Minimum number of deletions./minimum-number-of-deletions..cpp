//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
int minDeletions(string str, int n);

int main(){
    int t;
    cin >> t;
    while(t--){
        
        int n;
        cin >> n;
        string s;
        cin >> s;
        cout << minDeletions(s, n) << endl;

    
cout << "~" << "\n";
}
return 0;
}
// } Driver Code Ends

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int minDeletions(string str, int n) {
    // Step 1: Reverse the string
    string rev_str = str;
    reverse(rev_str.begin(), rev_str.end());
    
    // Step 2: Create a DP table to store the length of LCS
    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));
    
    // Step 3: Fill the DP table for LCS between str and rev_str
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (str[i - 1] == rev_str[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Step 4: The length of LPS is the LCS length between str and rev_str
    int LPS_length = dp[n][n];
    
    // Step 5: The result is the difference between n and LPS length
    return n - LPS_length;
}

