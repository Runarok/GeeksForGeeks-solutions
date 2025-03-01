//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
  typedef long long ll;  // Define the long long type as ll for easier usage

  // Function to calculate the power of a number with modulo 1000000007
  ll power(ll base, ll exponent) {
      ll mod = 1000000007;  // Define the modulo value
      if (exponent == 0) {
          return 1;  // Base case: b^0 = 1
      }
      if (exponent == 1) {
          return base;  // Base case: b^1 = b
      }

      ll result = power(base, exponent / 2);  // Recursively calculate power(b, e/2)
      result *= result;  // Square the result
      result %= mod;  // Apply modulo

      if (exponent % 2) {
          result *= base;  // If exponent is odd, multiply by the base
      }
      return result % mod;  // Return the result with modulo
  }

  // Function to find the nth number as per the given formula
  long long findNthNum(int n) {
      ll mod = 1000000007;  // Define the modulo value
      ll res = power(2, n) + power(3, n) + 1;  // Apply the formula to calculate the nth number
      return res % mod;  // Return the result with modulo to prevent overflow
  }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;

        Solution ob;
        cout << ob.findNthNum(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends