//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    int dp[101][101]; // DP table to store intermediate results
    
    Solution() {
        memset(dp, -1, sizeof(dp)); // Initialize DP table with -1
    }
    
    // Recursive function to solve for the maximum zigzag sum
    int solve(int i, int j, vector<vector<int>> M) {
        if (i == M.size() - 1)  // Base case: reached last row
            return dp[i][j] = M[i][j];
        
        if (dp[i][j] != -1)  // Check if already computed
            return dp[i][j];
        
        int mx = INT_MIN;  // Initialize the maximum value
        for (int k = 0; k < M.size(); k++) {
            if (k != j)  // Ensure zigzag sequence by excluding same column
                mx = max(mx, solve(i + 1, k, M));
        }
        
        return dp[i][j] = M[i][j] + mx;  // Return the result after including current element
    }

    // Main function to get the maximum zigzag sum
    int zigzagSequence(int n, vector<vector<int>> M) {
        int mx = -1;
        for (int i = 0; i < n; i++) {
            mx = max(mx, solve(0, i, M));  // Find max zigzag sum starting from any column in the first row
        }
        return mx;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<vector<int>> M(n, vector<int>(n, -1));
        for(int i = 0;i < n*n;i++)
            cin>>M[i/n][i%n];
        
        Solution ob;
        cout<<ob.zigzagSequence(n, M)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends