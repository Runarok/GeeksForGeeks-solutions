//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GfG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int k = sc.nextInt();

            Solution ob = new Solution();
            System.out.println(ob.countPermWithkInversions(n, k));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

class Solution {

    public int countPermWithkInversions(int n, int k) {
        // If no elements, return 0 as there are no permutations
        if (n == 0) return 0;

        // If no inversions are allowed, there is exactly 1 permutation (sorted)
        if (k == 0) return 1;

        // Create a 2D DP array where dp[i][j] will store the number of permutations
        // of i elements with exactly j inversions
        int[][] dp = new int[n + 1][k + 1];

        // Base case: There is exactly 1 permutation with 0 inversions for any number of elements
        for (int l = 0; l <= n; l++) {
            dp[l][0] = 1;
        }

        // Fill the DP table
        for (int l = 1; l <= n; l++) {
            for (int r = 1; r <= k; r++) {
                // Sum over all possible values of inversions for the current number of elements
                for (int i = 0; i <= Math.min(r, l - 1); i++) {
                    dp[l][r] = (dp[l][r] + dp[l - 1][r - i]);
                }
            }
        }

        // Return the result, which is the number of permutations of n elements with k inversions
        return dp[n][k];
    }
}
