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
            String s = br.readLine();
            String[] S = s.split(" ");
            long n = Long.parseLong(S[0]);
            Long a = Long.parseLong(S[1]);
            Long r = Long.parseLong(S[2]);
            Solution ob = new Solution();
            Long ans = ob.sum_of_gp(n, a, r);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to calculate the sum of a geometric progression (GP)
    public long sum_of_gp(long n, long a, long r)
    {
        // Initialize the variable to store the result of r raised to the power of n
        long fact = 1;
        
        // Calculate r^n by multiplying r iteratively
        for (int i = 1; i <= n; i++) {
            fact = fact * r;  // Update fact as r^i
        }
        
        // If the common ratio (r) is greater than 1, use the formula for the sum of GP
        if (r > 1) {
            long sum = a * (fact - 1) / (r - 1);  // Formula: a * (r^n - 1) / (r - 1)
            return sum;
        }
        // If r is 1, the sum of the GP is simply a multiplied by n
        else {
            long sum = a * n;  // For r = 1, sum = a * n
            return sum;
        }
    }
}
