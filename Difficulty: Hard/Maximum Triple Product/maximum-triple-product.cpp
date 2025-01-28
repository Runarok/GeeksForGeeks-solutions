//{ Driver Code Starts
//Initial Template for C++#include <bits/stdc++.h>
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
public:
    long long int dp[1010][1010];  // DP table to store the maximum product sum for subarrays
    long long int vec[2000];  // Array to store the input array and padding for boundary values

    // Function to calculate the maximum product sum for the subarray between l and r
    long long int solve(int l, int r) {
        if (l > r) return 0;  // Base case: If the left index is greater than the right, return 0

        if (dp[l][r]) return dp[l][r];  // If this subproblem has already been solved, return the stored result
        
        long long int ans = 0;  // Variable to store the maximum product sum

        // Try every possible partition in the subarray [l, r]
        for (int i = l; i <= r; i++) {
            // Calculate the cost for merging the elements between l and r at index i
            long long int cost = vec[l - 1] * vec[i] * vec[r + 1] + solve(l, i - 1) + solve(i + 1, r);
            ans = max(ans, cost);  // Keep track of the maximum product sum
        }
        
        // Store the result in the DP table and return it
        return dp[l][r] = ans;
    }

    // Function to compute the maximum product sum for the entire array
    long long int maxProductSum(int N, int arr[]) {
        memset(dp, 0, sizeof(dp));  // Initialize the DP table to 0
        vec[0] = 1;  // Set boundary value for vec[0]
        
        // Fill the vec array with values from the input array, arr[]
        for (int i = 1; i <= N; i++) {
            vec[i] = arr[i - 1];
        }
        
        vec[N + 1] = 1;  // Set boundary value for vec[N + 1]

        // Solve the problem for the entire range [1, N]
        return solve(1, N);
    }
};

//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        int arr[N];
        for(int i = 0;i < N;i++)
            cin>>arr[i];
        
        Solution ob;
        cout<<ob.maxProductSum(N,arr)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends