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
            long n = Long.parseLong(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.telephoneNum(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int M = 1000000007;  // Modulo value for large results

    // Function to calculate the nth term in the sequence of telephone numbers
    static long telephoneNum(long n) {
        // base case: a and b represent the first two values
        long a = 1, b = 1;
        
        // Iterate from 2 to n to calculate the nth value in the sequence
        for (int i = 2; i <= n; i++) {
            // Update b with the current value, considering the recurrence relation
            b = (b + (i - 1) * a) % M;
            
            // Update a for the next iteration, adjusting to the modulo
            a = (b - (i - 1) * a % M + M) % M;
        }
        
        // Return the nth term in the sequence
        return b;
    }
}
