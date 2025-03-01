//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    long long nthMysterious(long long N) {
        // Define the limit for prime generation
        int n = 1e5;
        long long sieve[n + 1];

        // Initialize the sieve: assume all numbers are prime initially
        for (int i = 0; i <= n; ++i) {
            if (i == 0 || i == 1) sieve[i] = false;  // 0 and 1 are not prime
            else sieve[i] = true;  // assume all others are prime
        }

        // Apply Sieve of Eratosthenes to find primes up to 'n'
        for (int i = 2; i * i <= n; ++i) {
            if (sieve[i]) {
                for (int j = i * i; j <= n; j += i) {
                    sieve[j] = false;  // mark non-prime numbers
                }
            }
        }

        // Collect all primes up to 'n'
        vector<long long> primes;
        for (int i = 2; i <= n; ++i) {
            if (sieve[i]) primes.push_back(i);  // Store prime numbers
        }

        // Return the 'Nth' mysterious number as per the given formula
        return (primes[N - 1] * primes[N - 1]) + 1;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long N;
        cin >> N;
        Solution ob;
        cout << ob.nthMysterious(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends