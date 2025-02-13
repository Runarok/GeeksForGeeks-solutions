//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String s = br.readLine().trim();
            String[] S = s.split(" ");
            int n = Integer.parseInt(S[0]);
            int k = Integer.parseInt(S[1]);
            Solution ob = new Solution();
            int ans = ob.totalWays(n, k);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    
    public int totalWays(int N, int K) {
        // If K is greater than N, no ways possible
        if (K > N) return 0;
        // If K is equal to N, there's only one way
        if (K == N) return 1;
        
        // Compute nCr(N-1, K-1)
        return nCr(N - 1, K - 1);
    }

    // Function to calculate power with modular exponentiation
    public static long power(long base, long exp, long mod) {
        long result = 1L;
        while (exp > 0) {
            if ((exp & 1) != 0) { // If exp is odd
                result = (result * base) % mod;
            }
            base = (base * base) % mod; // Square the base
            exp >>= 1; // Right shift exponent
        }
        return result;
    }

    // Function to compute nCr % mod using modular multiplicative inverse
    public static int nCr(int n, int r) {
        long result = 1L;
        long mod = (long) 1e9 + 7;

        // nCr is symmetric, so use the smaller r for efficiency
        if (r > n - r) {
            r = n - r;
        }

        for (int i = 0; i < r; i++) {
            result = (result * (n - i)) % mod;
            result = (result * power(i + 1, mod - 2, mod)) % mod; // Using Fermat's Little Theorem
        }

        return (int) result;
    }
}
