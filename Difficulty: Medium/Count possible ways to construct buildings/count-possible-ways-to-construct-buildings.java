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
            int N = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.TotalWays(N);
            System.out.println(ans);           
        
System.out.println("~");
}
    }
}

// } Driver Code Ends


// User function template for Java

class Solution {
    public int TotalWays(int n) {
        // Initialize counts for different configurations
        double singleSpace = 1, singleBlock = 1, blockSpace = 1, blockBlock = 1;
        int MOD = 1000000007;
        
        // Iterate from 2 to n to compute total ways
        for (int i = 2; i <= n; i++) {
            double newSingleSpace = (singleSpace + singleBlock + blockSpace + blockBlock) % MOD;
            double newSingleBlock = (singleSpace + blockSpace) % MOD;
            double newBlockSpace = (singleSpace + singleBlock) % MOD;
            double newBlockBlock = singleSpace;
            
            // Update the values for the next iteration
            singleSpace = newSingleSpace;
            singleBlock = newSingleBlock;
            blockSpace = newBlockSpace;
            blockBlock = newBlockBlock;
        }
        
        // Return the total number of ways modulo MOD
        return (int) ((singleSpace + singleBlock + blockSpace + blockBlock) % MOD);
    }
}
