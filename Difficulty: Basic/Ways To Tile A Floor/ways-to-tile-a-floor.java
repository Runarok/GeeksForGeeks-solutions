//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.numberOfWays(n));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

class Solution {
    static int numberOfWays(int n){
        // Initialize an array to store the results of subproblems (memoization)
        int[] dp = new int[n+1];
        return fib(n, dp);
    }
    
    static int fib(int n, int[] dp){
        // If the result is already computed, return it (avoid recalculating)
        if(dp[n] != 0) return dp[n];
        
        // Base case: For n=1 or n=2, the number of ways is n
        if(n == 1 || n == 2) return dp[n] = n;
        
        // Recursively calculate the number of ways and store the result in dp[n]
        return dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
    }
}
