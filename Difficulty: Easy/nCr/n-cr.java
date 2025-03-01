//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {   
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int n = sc.nextInt();
            int r = sc.nextInt();

            Solution ob = new Solution();
            System.out.println(ob.ncr(n, r));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int mod = 1000000007; // Define modulo value

    // Function to calculate nCr % mod
    static long ncr(int n, int r) {
        if (r > n) return 0; // If r is greater than n, nCr is 0
        
        long dp[] = new long[n + 1]; // Create a DP array to store factorials mod mod
        dp[0] = 1; // Base case: 0! = 1
        
        // Populate the dp array with factorial values mod mod
        for (int i = 1; i <= n; i++) {
            dp[i] = ((dp[i - 1]) * (i)) % mod;
        }
        
        // Calculate nCr using the formula:
        // nCr = n! / (r! * (n - r)!)
        // We use modular inverse to divide under modulo
        long c = ((((dp[n]) * (modInverse(dp[n - r]))) % mod) * modInverse(dp[r]) % mod) % mod;
        return c;
    }

    // Function to calculate modular inverse using Fermat's Little Theorem
    static long modInverse(long x) {
        long res = 1;
        long y = mod - 2; // Fermat's Little Theorem: x^(mod-2) is the inverse of x mod mod
        
        while (y > 0) {
            if (y % 2 == 1) res = (res * x) % mod; // Multiply if y is odd
            x = (x * x) % mod; // Square the base
            y /= 2; // Divide exponent by 2
        }
        return res;
    }
}
