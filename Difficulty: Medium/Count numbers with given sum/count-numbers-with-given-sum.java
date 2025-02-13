//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            String in_line[] = in.readLine().trim().split("\\s+");
            int n = Integer.parseInt(in_line[0]);
            int Sum = Integer.parseInt(in_line[1]);

            Solution ob = new Solution();
            System.out.println(ob.countWays(n, Sum));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int MODULO = 1000000007; // Large prime number for modulo operations

    // Recursive function to count the number of ways to form a sum using n digits
    static long allPaths(int n, int sum, long[][] dp) {
        // Base case: If both sum and n are zero, there is exactly one valid way (empty number)
        if (sum == 0 && n == 0)
            return 1;

        // If either sum or n is zero but the other is not, no valid number can be formed
        if (sum == 0 || n == 0)
            return 0;

        // If the sum required is greater than the maximum possible sum with n digits (each digit ≤ 9)
        if (sum > n * 9)
            return 0;

        // Check if the result is already computed and stored in dp table
        if (dp[n][sum] != -1) {
            return dp[n][sum];
        }

        dp[n][sum] = 0; // Initialize DP value

        // Try all possible digits (0-9) for the current position
        for (int digit = 0; digit <= 9; digit++) {
            if (sum >= digit) {
                dp[n][sum] = (dp[n][sum] + allPaths(n - 1, sum - digit, dp)) % MODULO;
            }
        }

        return dp[n][sum]; // Return the computed result
    }

    // Iterative DP approach to count the number of ways to form a sum using n digits
    static long countWays(int n, int sum) {
        long[][] dp = new long[n + 1][sum + 1];

        dp[0][0] = 1; // Base case: Only one way to form sum 0 with 0 digits

        for (int digitCount = 1; digitCount <= n; digitCount++) {
            for (int currentSum = 1; currentSum <= sum; currentSum++) {
                // If the required sum is greater than the maximum possible with the remaining digits
                if (currentSum > digitCount * 9) {
                    dp[digitCount][currentSum] = 0;
                    continue;
                }

                // Try all possible digits (0-9) for the current position
                for (int digit = 0; digit <= 9; digit++) {
                    if (currentSum >= digit) {
                        dp[digitCount][currentSum] = 
                            (dp[digitCount][currentSum] + dp[digitCount - 1][currentSum - digit]) % MODULO;
                    }
                }
            }
        }

        long result = dp[n][sum];

        return result > 0 ? result : -1; // Return result or -1 if no valid number exists
    }
}
