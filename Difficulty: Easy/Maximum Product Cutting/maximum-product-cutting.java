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
                    int n = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.maxProduct(n));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

class Solution
{

     static int maxProduct(int n) {
        // Handle base cases for n = 2 and n = 3
        if (n == 2 || n == 3) {
            return n - 1;  // Return 1 for n=2 and 2 for n=3 as they have maximum product
        }

        // Initialize weight and value arrays where each element represents a number from 1 to n
        int[] wt = new int[n];
        int[] val = new int[n];

        for (int i = 0; i < n; i++) {
            wt[i] = i + 1;  // Assigning weights (could represent integers from 1 to n)
            val[i] = i + 1; // Assigning values (same as weights for this problem)
        }

        // Initialize the DP table with (n+1) rows and (n+1) columns to store intermediate results
        int[][] t = new int[n + 1][n + 1];

        // Fill the DP table with base cases
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0) {
                    t[i][j] = 0;  // Base case: If no items, product is 0
                }
                if (j == 0) {
                    t[i][j] = 1;  // Base case: If no weight, the product is 1
                }
            }
        }

        // Main logic for unbounded knapsack variation
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (wt[i - 1] <= j) {
                    // Maximize product by either including the current item or excluding it
                    t[i][j] = Math.max(val[i - 1] * t[i][j - wt[i - 1]], t[i - 1][j]) % 1000000007;
                } else {
                    t[i][j] = t[i - 1][j];  // Exclude the current item if the weight exceeds j
                }
            }
        }

        // Return the maximum product from the DP table
        return t[n][n];
    }
};
