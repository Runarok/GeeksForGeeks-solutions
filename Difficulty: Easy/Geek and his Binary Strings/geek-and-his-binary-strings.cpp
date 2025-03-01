//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

#define MOD 1000000007

class Solution{
    private:
    // Function to compute modular exponentiation using the binary exponentiation method
    long long modPow(long long x, long long y, long long mod) {
        long long result = 1;
        x = x % mod;  // Ensure x is within mod
        while (y > 0) {
            if (y & 1)  // If y is odd, multiply result by x
                result = (result * x) % mod;
            y = y >> 1;  // Right shift y by 1 (divide by 2)
            x = (x * x) % mod;  // Square x and take mod
        }
        return result;
    }
    
	public:
    // Function to calculate the number of prefix strings
	int prefixStrings(int n) {
        if (n == 0) return 1;  // Base case: if n is 0, there's exactly 1 way
        long long res = 1;
        
        // Loop through from 2 to n, multiplying the required terms
        for (int i = 2; i <= n; ++i) {
            res = (res * (4 * i - 2)) % MOD;  // Multiply by (4 * i - 2)
            res = (res * modPow(i + 1, MOD - 2, MOD)) % MOD;  // Multiply by modular inverse of (i + 1)
        }
        
        return static_cast<int>(res);  // Return the result as an integer
    }
};



//{ Driver Code Starts.
int main() 
{
   
   
   	int t;
    cin >> t;
    while (t--)
    {
       	int n;
       	cin >> n;

       

        Solution ob;
        cout << ob.prefixStrings(n);
	    cout << "\n";
	     
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends