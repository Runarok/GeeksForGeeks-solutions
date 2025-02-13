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
            int ans = ob.compute_value(n);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate modular inverse using Fermat's Theorem
    long inverse(int x) {
        if (x == 1) return 1;
        int mod = 1000000007;
        return (mod - ((mod / x) * inverse(mod % x)) % mod + mod) % mod;
    }

    public int compute_value(int n) {
        int mod = 1000000007;
        long sum = 1, nCr = 1;

        // Iterate through values of r to compute the sum of squares of binomial coefficients
        for (int r = 1; r <= n; r++) {
            nCr = (((nCr * (n + 1 - r)) % mod) * inverse(r)) % mod;
            sum = (sum + (nCr * nCr) % mod) % mod;
        }

        return (int) sum;
    }
}
