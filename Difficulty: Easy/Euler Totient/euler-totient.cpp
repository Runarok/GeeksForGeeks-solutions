//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
  typedef long long ll;

  // Function to check if a number is prime
  bool isp(ll n){
    if (n == 1) {
        return false;  // 1 is not a prime number
    }
    if (n == 2) {
        return true;   // 2 is a prime number
    }
    if (n % 2 == 0) {
        return false;  // Even numbers other than 2 are not prime
    }
    // Check for factors from 3 to sqrt(n) for odd numbers
    for (ll i = 3; i <= sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;  // n is divisible by i, not a prime number
        }
    }
    return true;  // n is a prime number
}

  // Function to maximize the Euler ratio (product of primes) under the constraint
  long long maximizeEulerRatio(long long n) {
    ll res = 1;  // Initialize result as 1 (product of primes)
    ll p = 2;    // Start checking from the smallest prime number

    // Continue multiplying primes until the product exceeds n or p > 99
    while (res < n) {
        if (p > 99) {
            break;  // Stop if p exceeds 99
        }
        if (!isp(p)) {
            p++;  // Skip non-prime numbers
            continue;
        }
        // If the product of res and p is still <= n, multiply them
        if (p * res <= n) {
            res *= p;
            p++;  // Move to the next number
        }
        // If the product exceeds n, break the loop
        if (p * res > n) {
            break;
        }
    }
    return res;  // Return the final result
  }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long N;
        
        cin>>N;

        Solution ob;
        cout << ob.maximizeEulerRatio(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends