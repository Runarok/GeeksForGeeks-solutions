//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
  public:
    // Function to check if a number is prime
    int prime(int n) {
        // If the number is less than or equal to 1, it is not prime
        if (n <= 1) return 0;
        
        // If the number is 2 or 3, it is prime
        if (n == 2 || n == 3) return 1;
        
        // If the number is divisible by 2 or 3, it is not prime
        if (n % 2 == 0 || n % 3 == 0) return 0;
        
        // Check for divisibility from 5 up to the square root of n, skipping even numbers
        for (int i = 5; i <= sqrt(n); i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return 0; // n is divisible by i or i+2, so it's not prime
        }
        
        // If no divisors were found, the number is prime
        return 1;
    }
    
    // Function to check if both N-1 and N+1 are prime
    string damonPrime(int N) {
        // Check if both N-1 and N+1 are prime numbers
        if (prime(N + 1) && prime(N - 1)) return "Yes";
        return "No";
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        cin >> N;
        Solution ob;
        cout << ob.damonPrime(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends