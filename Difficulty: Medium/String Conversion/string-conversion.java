//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String input[] = read.readLine().split(" ");
            String X = input[0];
            String Y = input[1];
            
            Solution ob = new Solution();
            int result = ob.stringConversion(X,Y);
            
            System.out.println(result);
        }
    }
}
// } Driver Code Ends

class Solution {
    int stringConversion(String x, String y) {
        // Get the lengths of both strings
        int n = x.length();
        int m = y.length();
        
        // Initialize a DP table to store results
        boolean[][] dp = new boolean[n + 1][m + 1];
        
        // Base case: empty strings are trivially convertible
        dp[0][0] = true;
        
        // Fill DP table for cases where the first string is empty
        for (int i = 1; i <= n; i++) {
            if (Character.isUpperCase(x.charAt(i - 1))) {
                dp[i][0] = false; // If upper case, can't convert to empty string
            } else {
                dp[i][0] = dp[i - 1][0]; // Continue the pattern if lowercase
            }
        }

        // Fill the rest of the DP table
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                char xChar = x.charAt(i - 1);
                char yChar = y.charAt(j - 1);
                
                // Case 1: If the current character in x is uppercase and doesn't match y
                if (Character.isUpperCase(xChar) && xChar != yChar) {
                    dp[i][j] = false;
                }
                // Case 2: If characters match (uppercase match or lowercase match)
                else if (Character.isUpperCase(xChar) && xChar == yChar) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                // Case 3: If current character is lowercase, either match or ignore
                else {
                    dp[i][j] = dp[i - 1][j] || (Character.toUpperCase(xChar) == yChar && dp[i - 1][j - 1]);
                }
            }
        }
        
        // Return the result for the full length of both strings
        return dp[n][m] ? 1 : 0;
    }
}
