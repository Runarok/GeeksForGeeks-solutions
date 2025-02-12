//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

class Solution{
    public static int countPaths(int N){
    
        // Corner cases
        if (N == 1) {
            return 0;  // No valid paths when N is 1
        }
        if (N == 2) {
            return 3;  // Base case: 3 valid paths for N = 2
        }
        
        long mod = 1000000007;  // Large prime modulus to prevent overflow
        
        long[] dp = new long[N + 1];  // Array to store number of paths for each value of N
        
        // Initialize base cases
        dp[1] = 0;  // No valid paths for N = 1
        dp[2] = 3;  // 3 valid paths for N = 2
        
        long num = 3;  // Starting value for the number of paths at N = 2
        
        // Loop to calculate the number of valid paths for N >= 3
        for (int i = 3; i <= N; i++) {
            num = (num * 3) % mod;  // Update the number of paths by multiplying by 3 at each step
            dp[i] = ((num) - (dp[i - 1]) + mod) % mod;  // Calculate the current number of paths
        }
        
        // Return the result for N, modulo 1000000007
        int res = (int)(dp[N] % mod);
        
        return res;  // Final result
    }
}


//{ Driver Code Starts.

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.countPaths(N));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends