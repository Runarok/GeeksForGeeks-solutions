//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String s = sc.next();
                    int K = sc.nextInt();
                    
                    Solution ob = new Solution();
                    System.out.println(ob.isPossiblePalindrome(s,K));
                }
        }
}    
// } Driver Code Ends

class Solution {
    public int isPossiblePalindrome(String s, int K) {
        int n = s.length();
        int[][] dp = new int[n][n]; // dp[i][j] stores the minimum insertions needed to make s[i..j] a palindrome

        // Bottom-up approach to fill the dp table
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    // If characters match, no extra insertion needed; inherit from inner substring
                    dp[i][j] = (j - i > 1) ? dp[i + 1][j - 1] : 0;
                } else {
                    // If characters don't match, take the minimum of inserting at i or j
                    dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
                }
            }
        }

        // If required insertions are within the allowed limit K, return 1 (possible), otherwise 0 (not possible)
        return dp[0][n - 1] <= K ? 1 : 0;
    }
}
