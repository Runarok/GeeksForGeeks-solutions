//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to calculate the greatest common divisor (GCD) of two numbers
    int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    // Function to calculate the least common multiple (LCM) of two numbers
    long long lcm(int a, int b) {
        return (a / gcd(a, b)) * b;  // LCM formula: (a * b) / GCD(a, b)
    }

    // Function to find the maximum LCM of four numbers from 1 to N
    long long maxGcd(int N) {
        int maxi = INT_MIN;  // Variable to store the maximum LCM value, initialized to minimum integer value

        // Iterate over all combinations of four numbers from 1 to N
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N; j++) {
                for (int k = 1; k <= N; k++) {
                    for (int l = 1; l <= N; l++) {
                        // Calculate LCM of i, j, k, and l using GCD to prevent overflow
                        int lcmVal = (i / gcd(i, j)) * j;
                        lcmVal = (lcmVal / gcd(lcmVal, k)) * k;
                        lcmVal = (lcmVal / gcd(lcmVal, l)) * l;

                        maxi = max(maxi, lcmVal);  // Update maxi with the highest LCM found
                    }
                }
            }
        }

        return maxi;  // Return the maximum LCM found
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
        cout << ob.maxGcd(N) << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends