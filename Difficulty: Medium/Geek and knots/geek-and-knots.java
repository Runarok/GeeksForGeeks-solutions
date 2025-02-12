//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.math.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String a[] = in.readLine().trim().split("\\s+");
            int M = Integer.parseInt(a[0]);
            int N = Integer.parseInt(a[1]);
            int K = Integer.parseInt(a[2]);
            
            Solution ob = new Solution();
            System.out.println(ob.knots(M, N, K));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution{
    static long mod = 1000000007;  // Define the modulus value
    
    // Function to calculate the number of ways to form K knots from M and N
    static int knots(int M, int N, int K) {
        // Initialize a DP table to store combinations
        long[][] dp = new long[1001][1001];

        // Calculate combination of M choose K and N choose K
        long a = comb(M, K, dp);  
        long b = comb(N, K, dp);

        // Return the result of the product modulo mod
        return (int)((a % mod * b % mod) % mod);
    }

    // Function to calculate combinations n choose k
    static long comb(int n, int k, long[][] dp) {
        if (k == 0 || k == n) return 1;  // Base case: n choose 0 or n choose n is 1

        // If the value is already computed, return it
        if (dp[n][k] != 0) return dp[n][k];

        // Otherwise, compute the combination using the recursive formula
        dp[n][k] = (comb(n - 1, k, dp) % mod + comb(n - 1, k - 1, dp) % mod) % mod;

        return dp[n][k];  // Return the computed value
    }
}
