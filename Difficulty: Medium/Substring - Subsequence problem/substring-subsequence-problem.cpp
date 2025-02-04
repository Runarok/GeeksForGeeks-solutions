//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to get the length of the longest common subsequence (LCS) between two strings
    int getLongestSubsequence(string a, string b) {
        // dp[i][j] will store the length of the LCS of a[i..] and b[j..]
        int dp[a.length() + 1][b.length() + 1];
        int maxLength = 0; // Variable to track the maximum length of the common subsequence
        
        // Initialize the last row and column of dp table as 0, representing empty string comparisons
        for (int i = 0; i <= b.length(); i++)
            dp[a.length()][i] = 0;
        for (int i = 0; i <= a.length(); i++)
            dp[i][b.length()] = 0;
        
        // Fill the dp table by iterating from the end of the strings towards the beginning
        for (int i = a.length() - 1; i >= 0; i--) {
            for (int j = b.length() - 1; j >= 0; j--) {
                // If characters don't match, the LCS length remains the same as without this character
                dp[i][j] = dp[i + 1][j];
                
                // If characters match, update the LCS length
                if (a[i] == b[j]) {
                    dp[i][j] = 1 + dp[i + 1][j + 1];
                    maxLength = max(maxLength, dp[i][j]); // Track the maximum LCS length found
                }
            }
        }
        
        // Return the maximum length of the common subsequence found
        return maxLength;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        string A,B;

        cin >>A>>B;

        Solution ob;
        cout << ob.getLongestSubsequence(A,B) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends