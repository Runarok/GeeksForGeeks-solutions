//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to precompute the sieve of primes up to n
    void precompute(vector<int>& sieve, int n) {
        // Mark all even numbers as non-prime (except 2)
        for(int i = 4; i < n; i += 2) {
            sieve[i] = 0;  // Set all even numbers as non-prime
        }
        
        // For each odd number, mark its multiples as non-prime
        for(int i = 3; i * i < n; i += 2) {
            if(sieve[i]) {  // If i is prime
                for(int j = i * i; j < n; j += i) {
                    sieve[j] = 0;  // Mark multiples of i as non-prime
                }
            }
        }
    }
    
    // Function to find the count of primes in a range for multiple queries
    vector<int> primeRange(int N, int Q, vector<int> A, vector<pair<int, int>> R) {
        // Find the maximum element in the array A for size of sieve
        int mx = *max_element(A.begin(), A.end());
        
        // Initialize sieve to store prime status for numbers up to mx
        vector<int> sieve(mx + 1, 1);  // Assume all numbers are prime
        sieve[1] = 0;  // 1 is not prime
        precompute(sieve, mx + 1);  // Precompute prime numbers up to mx
        
        // Array to store the cumulative count of primes in array A
        vector<int> prefixSum(N + 1, 0);  // prefixSum[i] will store number of primes in A[0..i-1]
        
        // Fill the prefixSum array based on the prime status of elements in A
        for(int i = 0; i < N; i++) {
            if(sieve[A[i]]) {  // If A[i] is prime
                prefixSum[i + 1] = 1 + prefixSum[i];  // Increment the prime count at position i + 1
            } else {
                prefixSum[i + 1] = prefixSum[i];  // No change in prime count
            }
        }
        
        // Vector to store the result for each query
        vector<int> result;
        
        // For each query, calculate the count of primes in the given range [L, R]
        for(auto query : R) {
            int L = query.first, R = query.second;
            // Number of primes in range [L, R] is given by the difference in prefix sums
            result.push_back(prefixSum[R] - prefixSum[L - 1]);
        }
        
        return result;  // Return the result for all queries
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, Q;
        cin >> N >> Q;
        vector<int> A(N);
        vector<pair<int, int>> R(Q);
        for (int i = 0; i < N; i++) cin >> A[i];
        for (int i = 0; i < Q; i++) cin >> R[i].first >> R[i].second;
        Solution ob;
        vector<int> ans = ob.primeRange(N, Q, A, R);
        for (auto u : ans) cout << u << " ";
        cout << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends