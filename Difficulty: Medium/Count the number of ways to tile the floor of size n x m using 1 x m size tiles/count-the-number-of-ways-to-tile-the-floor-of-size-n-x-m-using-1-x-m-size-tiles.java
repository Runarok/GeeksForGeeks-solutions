//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String s = br.readLine().trim();
            String [] S = s.split(" ");
            int n = Integer.parseInt(S[0]);
            int m = Integer.parseInt(S[1]);
            Solution ob = new Solution();
            int ans = ob.countWays(n, m);
            System.out.println(ans);         
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int countWays(int n, int m) {
        int mod = 1000000007;
        int dp[] = new int[n + 1];

        // Base case: There is one way to fill a 0-length space
        dp[0] = 1;

        for (int i = 1; i <= n; i++) {
            if (i < m) {
                // If i is smaller than m, only one way to fill it (all vertical)
                dp[i] = dp[i - 1];
            } else if (i == m) {
                // If i is exactly m, we can either place m tiles vertically or use 1 horizontal set
                dp[i] = (dp[i - 1] + 1) % mod;
            } else {
                // Otherwise, we can either place one vertical tile or m horizontal tiles
                dp[i] = (dp[i - 1] + dp[i - m]) % mod;
            }
        }

        return dp[n]; // Return the total number of ways to fill n-length space
    }
}
