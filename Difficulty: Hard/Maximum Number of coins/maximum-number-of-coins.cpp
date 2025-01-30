//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution {
public:
    int maxCoins(int N, vector<int> &a) {
        // Extend the array by adding 1 at both ends for easier calculations
        vector<int> nums(N + 2, 1);
        for (int i = 0; i < N; i++) {
            nums[i + 1] = a[i]; // Copy elements from the original array
        }

        // Initialize a 2D DP table to store the maximum coins for each subarray
        vector<vector<int>> dp(N + 2, vector<int>(N + 2, 0));

        // Iterate over all possible subarray lengths (excluding boundaries)
        for (int len = 2; len <= N + 1; len++) {
            for (int left = 0; left + len <= N + 1; left++) {
                int right = left + len; // Define the right boundary of the subarray

                // Try bursting each balloon as the last one in the current subarray
                for (int last = left + 1; last < right; last++) {
                    // Compute the coins gained by bursting 'last' balloon
                    int coins = nums[left] * nums[last] * nums[right];

                    // Add previously computed max coins from the left and right partitions
                    coins += dp[left][last] + dp[last][right];

                    // Update the DP table with the maximum coins for this subarray
                    dp[left][right] = max(dp[left][right], coins);
                }
            }
        }

        // The result is stored in dp[0][N+1], which considers the entire array
        return dp[0][N + 1];
    }
};


//{ Driver Code Starts.
int main(){
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        vector<int> a(n);
        for(int i=0;i<n;i++)
            cin>>a[i];
        Solution S;
        cout<<S.maxCoins(n,a)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends