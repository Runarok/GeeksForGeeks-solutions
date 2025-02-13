//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.count(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long count(int N) {
        // DP table where dp[d][n] represents the count of non-decreasing numbers 
        // of length 'n' ending with digit 'd'
        long[][] dp = new long[10][N + 1];

        // Base case: For length 1, each digit (0-9) forms a valid number
        for (int digit = 0; digit <= 9; digit++) {
            dp[digit][1] = 1;
        }

        // Fill the DP table for lengths from 2 to N
        for (int length = 2; length <= N; length++) {
            for (int digit = 0; digit <= 9; digit++) {
                // Count numbers of the same length ending at the same digit
                dp[digit][length] = dp[digit][length - 1];

                // Add counts of numbers ending with smaller digits (to maintain non-decreasing order)
                if (digit > 0) {
                    dp[digit][length] += dp[digit - 1][length];
                }
            }
        }

        // Sum all valid non-decreasing numbers of length N
        long result = 0;
        for (int digit = 0; digit <= 9; digit++) {
            result += dp[digit][N];
        }
        
        return result;
    }
}
