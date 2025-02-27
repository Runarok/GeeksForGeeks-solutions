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
            int ans = ob.no_ofString(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution
{
    public int no_ofString(int n)
    {
        // Modulo value to prevent overflow
        int mod = 1000000007;

        // a represents (n^3)/2
        long a = (long) Math.pow(n, 3) / 2;

        // b represents (3 * n) / 2
        long b = (3L * n) / 2;

        // c is an extra constant value (2 for odd length strings, 1 for even)
        long c = (n % 2 != 0) ? 2 : 1;

        // Final result calculated with modulo
        return (int) ((a + b + c) % mod);
    }
}
