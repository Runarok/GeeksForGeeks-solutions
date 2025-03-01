//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
public:
    // Function to check if a number is prime
    bool isPrime(int n) {
        // Numbers less than or equal to 1 are not prime
        if (n <= 1) {
            return false;
        }

        // Check for divisibility from 2 to the square root of n
        for (int i = 2; i <= sqrt(n); ++i) {
            if (n % i == 0) {
                return false; // n is divisible by i, so it's not prime
            }
        }
        return true; // n is prime
    }

    // Function to check if a number N can be expressed as the sum of two primes
    string isSumOfTwo(int N) {
        // If N is less than or equal to 3, it can't be expressed as the sum of two primes
        if (N <= 3) {
            return "No";
        }

        // Check if any pair of primes add up to N
        for (int i = 2; i <= N / 2; ++i) {
            // If i and N-i are both prime, return "Yes"
            if (isPrime(i) && isPrime(N - i)) {
                return "Yes";
            }
        }

        // If no such pair is found, return "No"
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
        cout << ob.isSumOfTwo(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends