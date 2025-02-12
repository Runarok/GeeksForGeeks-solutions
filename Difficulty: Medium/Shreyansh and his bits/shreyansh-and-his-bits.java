//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split("\\s+");
            long  N = Long.parseLong(input_line[0]);
            Solution ob = new Solution();
            System.out.println(ob.count(N));
        
System.out.println("~");
}
    }
}



// } Driver Code Ends

// User function Template for Java
class Solution{
    
    // dp table for storing previously calculated nCr values
    long[][] dp;
    
    // Function to count the number of special subsets
    long count(long n)
    {
        // Initialize dp array with -1, representing uncalculated values
        dp = new long[64][64];
        for (int i = 0; i < 64; i++) {
            Arrays.fill(dp[i], -1);
        }
        
        // Initialize variables
        int ones = 0;         // Count of 1's in the binary representation of n
        int positions = 0;    // Positions of bits
        long ans = 0;         // Store the result
        
        // Iterate over the binary representation of n
        while (n > 0) {
            if ((n & 1) == 1) {
                // If the current bit is 1, count the number of subsets
                ones++;
                ans += nCr(positions, ones); // nCr is used to calculate combinations
            }
            n = n >> 1;  // Right shift n to process the next bit
            positions++;
        }
        
        return ans;
    }
    
    // Function to calculate nCr (combinations)
    long nCr(int n, int r) {
        // Return 0 if r is greater than n (invalid case)
        if (r > n) {
            return 0;
        }
        
        // Base cases
        if (r == 0 || r == n) return 1;
        
        // If the value is already calculated, return it from dp
        if (dp[n][r] != -1) return dp[n][r];
        
        // Calculate nCr recursively using the formula
        return dp[n][r] = nCr(n - 1, r - 1) + nCr(n - 1, r);
    }
}
