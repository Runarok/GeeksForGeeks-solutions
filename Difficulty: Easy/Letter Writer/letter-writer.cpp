//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    int minHours(int N){
        // Initialize a DP array with large values
        vector<int> dp(N+1,1e6);
        dp[0] = 0; // Base case: 0 hours for 0

        // Update dp array for multiples of 10
        for(int i = 10; i <= N; ++i){
            dp[i] = min(dp[i], 1 + dp[i - 10]);
        }

        // Update dp array for multiples of 12
        for(int i = 12; i <= N; ++i){
            dp[i] = min(dp[i], 1 + dp[i - 12]);
        }

        // Return the result if it's not the initial large value
        return dp[N] != 1e6 ? dp[N] : -1;
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        cout<<ob.minHours(N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends