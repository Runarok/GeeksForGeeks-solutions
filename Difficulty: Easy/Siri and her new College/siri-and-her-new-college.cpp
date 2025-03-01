//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    int bunkDays(int N, int M, int K){
        // Calculate the number of new dresses delivered based on the rate M
        int newDressesDelivered = (K - 1) / M;

        // Calculate total attended days, ensuring it's capped at K
        int attendedDays = min(N + newDressesDelivered, K);

        // Calculate bunk days as the difference between total days K and attended days
        int bunkDays = K - attendedDays;

        return bunkDays;  // Return the number of bunk days
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int  N, M, K;
        cin >> N >> M >> K;
        Solution ob;
        cout<<ob.bunkDays(N,M,K)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends