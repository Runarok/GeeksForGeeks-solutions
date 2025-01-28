//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    int solveWordWrap(vector<int> a, int k) {
        // Get the number of words
        int n = a.size();
        
        // Create a 2D DP table to store the cost of placing words between i and j
        vector<vector<int>> dp(n, vector<int>(n, -1));
     
        // Loop over all possible word ranges from i to j
        for(int i = 0; i < n; i++) {
            int ans = 0;
            for(int j = i; j < n; j++) {
                // Add the word length at index j to the total length
                ans += a[j];
                
                // Calculate the remaining space after considering the words from i to j
                int val = k - ans - (j - i);
                
                // If the space is valid (non-negative), compute the penalty for this arrangement
                if(val >= 0) {
                    dp[i][j] = val * val;
                    
                    // If it's the last word, no additional penalty for the next line
                    if(j == n - 1) {
                        dp[i][j] = 0;
                    }
                }
                else {
                    // If the space is insufficient, mark it as invalid (-1)
                    dp[i][j] = -1;
                }
            }
        }
        
        // Create a DP array to store the minimum cost for word wrapping from each position
        vector<int> v(n + 1, 0);
        
        // Loop backwards to fill the DP array with the minimum wrapping cost
        for(int i = n - 2; i >= 0; i--) {
            int mn = INT_MAX;
            
            // Try placing words from i to j and update the minimum cost
            for(int j = i; j < n; j++) {
                if(dp[i][j] != -1 && v[j + 1] != -1)
                    mn = min(mn, dp[i][j] + v[j + 1]);
            }
            
            // If no valid configuration found, set the cost as -1
            if(mn == INT_MAX) mn = -1;
            
            // Store the computed minimum cost for wrapping from position i
            v[i] = mn;
        }
        
        // Return the minimum cost for wrapping words starting from position 0
        return v[0];
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string str;
        getline(cin, str);

        stringstream ss(str);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        string str1;
        getline(cin, str1);

        stringstream ss1(str1);
        int k;
        int num1;
        while (ss1 >> num1) {
            k = num1;
        }
        Solution obj;
        cout << obj.solveWordWrap(arr, k) << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends