//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    int m = 1000003;  // Modulo value used for calculations (prime number slightly larger than typical nCr values)

    // Function to calculate (n^x) % m using fast exponentiation (binary exponentiation)
    int power(int n, int x) {
        int ans = 1;
        while (x) {
            if (x % 2 == 0) {
                // If x is even, square the base and halve the exponent
                n = int((1LL * n * n) % m);
                x /= 2;
            } else {
                // If x is odd, multiply the answer by the base and reduce the exponent by 1
                ans = int((1LL * n * ans) % m);
                x -= 1;
            }
        }
        return ans;
    }

    // Function to calculate nCr % m using precomputed factorial values
    int small(int n, int r, vector<int>& fac) {
        if (n < r) return 0;  // If r > n, nCr is 0
        // Calculate the result using the formula: nCr % m = fac[n] * (fac[r]^-1 % m) * (fac[n-r]^-1 % m) % m
        return int((1LL * ((1LL * fac[n] * power(fac[r], m - 2)) % m) * power(fac[n - r], m - 2)) % m);
    }

    // Main function to calculate nCr % m
    int nCr(long long n, long long r) {
        int ans = 1;
        vector<int> fac(m, 1);  // Vector to store factorials modulo m
        int st = 1;
        
        // Precompute factorials modulo m
        for (int i = 2; i < m; i++) {
            st = int((1LL * st * i) % m);
            fac[i] = st;
        }

        // Calculate nCr by breaking it into smaller parts using the properties of modulus
        while (n > 0 || r > 0) {
            int temp1 = n % m;  // Take n modulo m
            int temp2 = r % m;  // Take r modulo m
            ans = int((1LL * ans * small(temp1, temp2, fac)) % m);  // Multiply the current result by nCr of the smaller parts
            n /= m;  // Reduce n by dividing by m
            r /= m;  // Reduce r by dividing by m
        }

        return ans;  // Return the final nCr modulo m
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		long long n, r;
		cin >> n >> r;
		Solution obj;
		int ans = obj.nCr(n, r);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends