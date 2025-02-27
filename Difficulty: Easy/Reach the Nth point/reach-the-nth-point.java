//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.nthPoint(n);
            System.out.println(ans);            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution
{
    public int nthPoint(int n)
    {   
        // Edge case for n = 0 or n = 1
        if(n == 0 || n == 1) {
            return n;
        }
        
        // Initialize dp array to store intermediate results
        int[] dp = new int[n + 1];
        
        // Fill dp array with -1 indicating uncomputed states
        for(int i = 0; i <= n; i++) {
            dp[i] = -1;
        }
        
        // Base cases
        dp[0] = 0; // 0 ways to reach 0th step
        dp[1] = 1; // 1 way to reach 1st step
        dp[2] = 2; // 2 ways to reach 2nd step (1+1 or 2)
        
        // Call recursive function to compute result
        return calculateWays(n, dp);
    }
    
    // Recursive function to compute number of ways with memoization
    public int calculateWays(int n, int[] dp) {
        if(dp[n] != -1) {
            return dp[n]; // Return already computed result
        }
        
        // Total ways is sum of ways to reach (n-1) and (n-2) steps
        int count = calculateWays(n - 1, dp) + calculateWays(n - 2, dp);
        
        // Store result with modulo to handle large numbers
        return dp[n] = count % 1000000007;
    }
}
