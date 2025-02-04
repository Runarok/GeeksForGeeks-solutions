//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    long long int mod;  // Modulo for calculations

    // Function to perform binary exponentiation (a^b % mod)
    long long bin_expo(long long base, long long exponent) {
        long long result = 1;
        while (exponent > 0) {
            if (exponent & 1)  // If exponent is odd, multiply the result by the base
                result = (result * base) % mod;
            base = (base * base) % mod;  // Square the base
            exponent = exponent / 2;  // Divide the exponent by 2
        }
        return result;
    }

    // Function to calculate modular inverse using Fermat's Little Theorem
    long long mod_inverse(long long a) {
        return bin_expo(a, mod - 2);  // a^(mod-2) is the modular inverse of a
    }

    // Function to calculate nCr % mod using Fermat's Little Theorem
    long long fermat(long long n, long long r) {
        // If n < r, return 0 as it's not possible to choose r elements from n
        if (n < r)
            return 0;
        
        // Base cases
        if (r == 0 || n == r)
            return 1;
        if (r == n - 1 || r == 1)
            return n;
        
        // Array to store factorials mod mod
        long long fact[n + 1];
        fact[0] = 1;  // 0! = 1
        
        // Calculate factorials mod mod
        for (long long i = 1; i <= n; i++)
            fact[i] = (fact[i - 1] * i) % mod;
        
        // Calculate nCr % mod using precomputed factorials
        long long numerator = fact[n];
        long long denominator_r = mod_inverse(fact[r]);
        long long denominator_n_r = mod_inverse(fact[n - r]);
        
        // Return the result of nCr % mod
        return ((numerator * denominator_r) % mod * denominator_n_r % mod) % mod;
    }

    // Function to calculate nCr % mod using Lucas' Theorem
    long long lucas(long long n, long long r) {
        // Base case: nC0 = 1
        if (r == 0)
            return 1;

        // Get the remainders when dividing n and r by mod
        long long ni = n % mod, ri = r % mod;
        
        // Calculate the result for the current values of n and r
        long long current_result = fermat(ni, ri);

        // Recursively apply Lucas' Theorem to higher powers of mod
        return (lucas(n / mod, r / mod) * current_result) % mod;  
    }

public:
    // Function to calculate nCr % mod for large values of n and r
    long long int count(long long int N, long long int K, long long int M) {
        mod = M;  // Set the modulus value
        return lucas(N - 1, K - 1);  // Calculate (N-1)C(K-1) % M using Lucas' Theorem
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        long long int N;
        cin>>N;
        long long int K;
        cin>>K;
        long long int M;
        cin>>M;
        Solution ob;
        cout << ob.count(N,K,M) << endl;
    
cout << "~" << "\n";
}
    return 0; 
}
// } Driver Code Ends