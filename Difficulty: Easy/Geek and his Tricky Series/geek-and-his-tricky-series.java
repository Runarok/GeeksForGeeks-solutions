//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int n = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.nthTerm(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int nthTerm(int n) {
        // Initialize the first term of the sequence as 7
        int a = 7;

        // If the requested term is the first one, return 7 directly
        if (n == 1) return 7;

        // Loop through from the 2nd term to the nth term
        for (int i = 2; i <= n; i++) {
            // Calculate the next term using the given formula
            // The result is taken modulo 1000000007 to handle large numbers
            a = ((a * 2) + i - 1) % 1000000007;
        }

        // Return the nth term
        return a;
    }
}
