//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.math.*;
import java.io.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int n = sc.nextInt();
            Solution obj = new Solution();
            long topDownans = obj.topDown(n);
            long bottomUpans = obj.bottomUp(n);
            if (topDownans != bottomUpans)
                System.out.println(-1);
            else
                System.out.println(topDownans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Top-down approach (Recursive with memoization)
    static long topDown(int n, long[] dp){
        // Base case: if n is 0 or 1, return n itself
        if(n <= 1){
            return n;
        }
        
        // If already computed, return the stored value to avoid recomputation
        if(dp[n] != -1){
            return dp[n] % 1000000007;
        }
        
        // Recursively compute the value and store it in dp array
        dp[n] = (topDown(n - 1, dp) + topDown(n - 2, dp)) % 1000000007;
        return dp[n];
    }
    
    // Wrapper function for top-down approach
    static long topDown(int n) {
        // Initialize dp array with -1 to indicate uncalculated values
        long[] dp = new long[n + 1];
        for(int i = 0; i <= n; i++){
            dp[i] = -1;
        }
        
        // Start recursive calculation with memoization
        return topDown(n, dp);
    }

    // Bottom-up approach (Iterative)
    static long bottomUp(int n) {
        // Initialize dp array to store results for subproblems
        long[] dp = new long[n + 1];
        
        // Base cases
        dp[0] = 0;  // Fibonacci(0) = 0
        dp[1] = 1;  // Fibonacci(1) = 1
        
        // Fill the dp array for other values using the iterative approach
        for(int i = 2; i <= n; i++){
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
        }
        
        // Return the final result for Fibonacci(n)
        return dp[n];
    }
}
