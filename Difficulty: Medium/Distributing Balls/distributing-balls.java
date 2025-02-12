//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0) {
            String a[] = in.readLine().trim().split("\\s+");
            int m = Integer.parseInt(a[0]);
            int n = Integer.parseInt(a[1]);
            int p = Integer.parseInt(a[2]);
            String a1[] = in.readLine().trim().split("\\s+");
            int arr[] = new int[n];
            for(int i = 0;i < n;i++)
                arr[i] = Integer.parseInt(a1[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.countWays(m, n, p, arr));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    static int countWays(int m, int n, int p, int arr[]) {
        int remain = m - p;  // Remaining candies after removing the p candies already used
        int sum = 0;
        
        // Calculate the sum of candies in the array
        for (int i = 0; i < n; i++) {
            sum += arr[i];
        }
        
        int extra = remain - sum;  // Calculate the extra candies to distribute

        // If the extra candies are negative, it's impossible to distribute
        if (extra < 0) {
            return -1;
        }
        // If there are no extra candies, there's only one way to distribute them (no distribution needed)
        else if (extra == 0) {
            return 1;
        }

        // Initialize DP array where dp[balls][blanks] represents the number of ways to distribute `balls` candies
        // among `blanks` slots
        int[][] dp = new int[extra + 1][n + 1];
        
        // Base case: If no extra balls to distribute, there's one way to do it (distribute 0 candies)
        for (int i = 0; i <= n; i++) {
            dp[0][i] = 1;
        }

        // Bottom-up dynamic programming calculation
        // Iterate through the number of balls to be distributed
        for (int balls = 1; balls <= extra; balls++) {
            // Iterate through the available slots (blanks)
            for (int blanks = 1; blanks <= n; blanks++) {
                // Distribute balls across the blanks in different ways
                for (int ball = 0; ball <= Math.min(balls, extra); ball++) {
                    dp[balls][blanks] = (dp[balls][blanks] + dp[balls - ball][blanks - 1]) % 1000000007;
                }
            }
        }

        // Return the result for distributing all extra candies across all blanks
        return dp[extra][n];
    }
}
