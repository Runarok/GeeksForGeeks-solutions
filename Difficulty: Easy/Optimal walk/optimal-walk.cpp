//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
public:
    // Function to calculate the optimal walk
    long long optimalWalk(long long n, long long A, long long B)
    {
        // Initialize a dynamic programming array to store the minimum cost for each step
        vector<long long> dp(n+1, 0);
        
        // Iterate through each step from 1 to n
        for (int i = 1; i <= n; ++i) {
            if (i % 2 == 0) {
                // If the step number is even, we have two choices:
                // 1. Walk one step forward, adding cost A
                // 2. Jump to half the current step number, adding cost B
                dp[i] = min(dp[i - 1] + A, dp[i / 2] + B);
            } else {
                // If the step number is odd, we have two choices:
                // 1. Walk one step forward, adding cost A
                // 2. Jump to the next step divided by 2, adding cost B
                dp[i] = min(A + dp[(i + 1) / 2] + B, dp[i - 1] + A);
            }
        }
        
        // Return the minimum cost to reach step n
        return dp[n];
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        long long N, A, B;
        cin>>N>>A>>B;
        
        Solution ob;
        cout<<ob.optimalWalk(N, A, B)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends