//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int M = Integer.parseInt(read.readLine());
            int N = Integer.parseInt(read.readLine());
            int X = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.noOfWays(M, N, X));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// User function template for Java

class Solution {
    static int noOfWays(int m, int n, int x) {
        // DP array to store the number of ways to get sum `j`
        int dp[] = new int[x + 1];
        dp[0] = 1; // Base case: One way to get sum 0 (choosing nothing)

        // Iterate over each die
        for (int i = 1; i <= n; i++) {
            // Traverse from right to left to avoid overwriting values
            for (int j = x; j >= 0; j--) {
                dp[j] = 0; // Reset current sum count
                
                // Consider all face values from 1 to `m`
                for (int k = 1; k <= m && j - k >= 0; k++) {
                    dp[j] += dp[j - k];
                }
            }
        }
        return dp[x];
    }
}
