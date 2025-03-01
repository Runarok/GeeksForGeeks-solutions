//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int productOfPairs(int N, vector<int> A) {
        const int MOD = 1000000007;
        long long totalSum = 0, squareSum = 0;

        // Calculate total sum and square sum modulo MOD
        for (int i = 0; i < N; i++) {
            totalSum = (totalSum + A[i]) % MOD;
            squareSum = (squareSum + (1LL * A[i] * A[i]) % MOD) % MOD;
        }

        // Apply formula: (totalSum^2 - squareSum) / 2, using modular inverse of 2
        long long result = ((totalSum * totalSum) % MOD - squareSum + MOD) % MOD;
        result = (result * 500000004) % MOD; // Modular inverse of 2 in (mod 10^9+7)

        return (int) result;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        cin >> N;
        vector<int> A(N);
        for (auto &u : A) cin >> u;
        Solution ob;
        cout << ob.productOfPairs(N, A) << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends