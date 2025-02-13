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
            String str = br.readLine().trim();
            Solution ob = new Solution();
            int ans = ob.TotalWays(str);
            System.out.println(ans);           
        }
    }
}

// } Driver Code Ends

class Solution {
    // Function to calculate the total ways to form the string "GEEKS" from the given string
    public int TotalWays(String str) {
        String s2 = "GEEKS";  // The target string we want to form
        int MOD = 1000000007;  // Modulus value to avoid overflow
        int m = str.length();  // Length of the input string
        int n = 5;  // Length of the target string "GEEKS"

        // Initialize a 2D DP array to store the results of subproblems
        int[][] dp = new int[m + 1][n + 1];

        // Base case: There's 1 way to form the empty string from any prefix of str
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }

        // Fill the DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // If the characters match, we can either:
                // - Take the character from str to match the target string (dp[i-1][j-1])
                // - Skip the current character in str (dp[i-1][j])
                if (str.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        // Return the number of ways to form the target string "GEEKS" from the entire input string
        return dp[m][n];
    }
}
