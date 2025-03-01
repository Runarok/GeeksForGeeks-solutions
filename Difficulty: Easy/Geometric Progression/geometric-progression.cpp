//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:

  // Function to compute power of a number a raised to the power b modulo 'mod'
  long long f(long long a, long long b, long long mod) {
      long long res = 1; // Initialize result as 1
      while (b) {
            if (b & 1) // If b is odd
                res = res * a % mod; // Multiply result with a
            a = a * a % mod; // Square a
            b >>= 1; // Right shift b (divide b by 2)
      }
      return res; // Return the result
  }

  // Function to compute the value of the geometric progression modulo '1e9+7'
  long long geoProg(long long N) {
      // Compute 2 raised to the power of (2^N - 1) modulo 1e9+7 and subtract 1
      return f(2, f(2, N, 1e9+7 - 1), 1e9+7) - 1;
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
        cout << ob.geoProg(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends