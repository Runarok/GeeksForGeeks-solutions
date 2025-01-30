//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
class Solution {
  public:
    // DP table to store results of subproblems
    int dp[101][101];

    // Recursive function to count the number of ways to divide val using k numbers
    int rec(int val, int k) {
        // Base case: if val is 0, there's exactly 1 way to divide it (using 0 numbers)
        if (val == 0) return 1;

        // Base case: if val is negative or k is 0, no valid division exists
        if (val < 0 || k == 0) return 0;

        // If the result is already computed for this state, return it
        if (dp[val][k] != -1) return dp[val][k];

        // Recursive case: consider two possibilities:
        // 1. Include the number k in the division and reduce val by k.
        // 2. Exclude the number k and consider the next smaller number k-1.
        int ans = rec(val - k, k) + rec(val, k - 1);

        // Store the result in the dp table and return it
        return dp[val][k] = ans;
    }

    // Function to count the number of ways to divide N into K parts
    int countWaystoDivide(int N, int K) {
        // Initialize the dp table with -1 to indicate uncomputed states
        memset(dp, -1, sizeof(dp));

        // Start the recursion with N-K and K
        return rec(N - K, K);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, K;
        cin >> N >> K;
        Solution ob;
        cout << ob.countWaystoDivide(N, K) << endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends