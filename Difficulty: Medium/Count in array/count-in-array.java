//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

// } Driver Code Ends
//User function Template for Java
class Solution {
    
    static int mod = (int) 1e9 + 7;
    static int dp1[][] = new int[101][101];

    // Recursive function to count valid sequences
    static int solve(int[] dp, int m, int n, int prev) {
        if (n == 0) {
            return 1; // Base case: valid sequence formed
        }
        
        if (dp1[n][prev] != -1) {
            return dp1[n][prev]; // Return memoized result
        }
        
        int ans = 0;

        for (int i = 0; i < m; i++) {
            if (prev == 0) { 
                // First element can be any number
                ans = (ans % mod + solve(dp, m, n - 1, dp[i]) % mod) % mod;
            } else {
                // Check divisibility condition before adding to sequence
                if (prev % dp[i] == 0 || dp[i] % prev == 0) {
                    ans = (ans % mod + solve(dp, m, n - 1, dp[i]) % mod) % mod;
                }
            }
        }
        
        return dp1[n][prev] = ans % mod; // Store result and return
    }

    static int count(int N, int M) {
        int[] dp = new int[M];

        // Initialize array with numbers from 1 to M
        for (int i = 0; i < M; i++) {
            dp[i] = i + 1;
        }

        // Reset memoization table
        for (int i = 0; i < 101; i++) {
            Arrays.fill(dp1[i], -1);
        }

        return solve(dp, M, N, 0) % mod; // Start recursion with N length and no previous number
    }
}



//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String S[] = read.readLine().split(" ");
            int N = Integer.parseInt(S[0]);
            int M = Integer.parseInt(S[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.count(N,M));
        }
    }
}
// } Driver Code Ends