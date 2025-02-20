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
            int ans = ob.Nth_rowSum(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int Nth_rowSum(int n) {
        // Define the modulo value to prevent overflow
        int mod = (int) Math.pow(10, 9) + 7;

        // Calculate the sum of the first `n` terms of the sequence
        long upperBound = ((n * (n + 1)) / 2) * 2;
        long lowerBound = (((n - 1) * n) / 2) * 2;

        // Compute the sum of squares for both bounds
        upperBound = (upperBound * (upperBound + 1)) / 2;
        lowerBound = (lowerBound * (lowerBound + 1)) / 2;

        // Calculate the difference modulo `mod`
        long sum = (upperBound - lowerBound) % mod;

        return (int) sum;
    }
}
