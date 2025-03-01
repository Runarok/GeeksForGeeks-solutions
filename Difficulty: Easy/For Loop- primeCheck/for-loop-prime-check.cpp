//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution {
  public:
    // Function to check if a number is prime or not
    string isPrime(int n) {
        // A number less than 2 is not prime
        if (n < 2) return "No";

        // Check divisibility from 2 to sqrt(n)
        for (int i = 2; i <= sqrt(n); i++) {
            // If n is divisible by i, it is not a prime number
            if (n % i == 0) {
                return "No";  // Return "No" if divisible
            }
        }

        // If no divisors were found, n is prime
        return "Yes";  // Return "Yes" if n is prime
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {

        int n;
        cin >> n;

        Solution obj;
        string res = obj.isPrime(n);

        cout << res << "\n";

        cout << "~"
             << "\n";
    }
}

// } Driver Code Ends