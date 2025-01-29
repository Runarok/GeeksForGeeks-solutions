//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
  int mod = pow(10, 9) + 7;  // Modulo value for large numbers to prevent overflow

  // Function to multiply two 2x2 matrices p and q, storing the result in p
  void multiply(long long int p[2][2], long long int q[2][2]) {
    // Matrix multiplication formula with modulo
    long long int x = ((p[0][0] * q[0][0]) % mod + (p[0][1] * q[1][0]) % mod) % mod;
    long long int y = ((p[0][0] * q[0][1]) % mod + (p[0][1] * q[1][1]) % mod) % mod;
    long long int z = ((p[1][0] * q[0][0]) % mod + (p[1][1] * q[1][0]) % mod) % mod;
    long long int a = ((p[1][0] * q[0][1]) % mod + (p[1][1] * q[1][1]) % mod) % mod;

    // Update matrix p with the result
    p[0][0] = x;
    p[0][1] = y;
    p[1][0] = z;
    p[1][1] = a;
  }

  // Function to compute the power of the matrix f to the nth power
  void power(long long int f[2][2], long long int n) {
    if (n == 0 || n == 1)
      return;  // Base case for recursion
    
    // Initialize the matrix m for Fibonacci transformation
    long long int m[2][2] = {{1, 1}, {1, 0}};
    
    // Recursively compute the power of the matrix
    power(f, n / 2);  // Divide and conquer to compute A^(n/2)
    
    // Multiply f by itself to get A^2
    multiply(f, f);
    
    // If n is odd, multiply once more by the base transformation matrix
    if (n % 2 != 0)
      multiply(f, m);
  }

  // Function to compute the nth Fibonacci number using matrix exponentiation
  int fib(long long int n) {
    long long int f[2][2] = {{1, 1}, {1, 0}};  // Base Fibonacci matrix
    if (n == 0)
      return 0;  // The 0th Fibonacci number is 0
    
    // Compute the (n-1)th power of the Fibonacci matrix
    power(f, n - 1);
    
    // Return the top-left element of the matrix (Fibonacci number)
    return (int)f[0][0] % mod;
  }

  // Function to compute the count of strings of length N (using Fibonacci sequence)
  int countStrings(long long int N) {
    int ans = fib(N + 2);  // Calculate Fibonacci number at index N+2
    return ans;  // Return the Fibonacci number (which gives the desired count)
    // Explanation: The count of strings is related to the Fibonacci sequence.
    // For example, for N=1, the answer is 2, which is at index 3 in the Fibonacci sequence.
  }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int N;
        cin >> N;
        Solution obj;
        cout << obj.countStrings(N) << endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends