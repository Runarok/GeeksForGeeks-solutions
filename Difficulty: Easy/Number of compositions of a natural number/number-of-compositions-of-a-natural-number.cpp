//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    typedef long long ll;
    
    // Function to compute (b^e) % 1000000007 using fast exponentiation
    ll power(ll base, ll exponent) {
        ll mod = 1000000007;  // Modulo value to avoid overflow
        if (exponent == 0) {
            return 1;  // Base case: b^0 = 1
        }
        if (exponent == 1) {
            return base;  // Base case: b^1 = b
        }
        
        // Recursively calculate (b^(e/2))^2
        ll result = power(base, exponent / 2);
        result *= result;  // Square the result
        result %= mod;  // Apply modulo to avoid overflow
        
        // If exponent is odd, multiply by base one more time
        if (exponent % 2 == 1) {
            result *= base;
        }
        
        return result % mod;  // Return the final result modulo mod
    }

    // Function to calculate the number of ways (2^(n-1)) % 1000000007
    int no_of_ways(int n) {
        return power(2, n - 1);  // Calculate 2^(n-1) % 1000000007
    }    
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		Solution ob;
		int ans = ob.no_of_ways(n);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends