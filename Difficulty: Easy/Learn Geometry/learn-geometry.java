//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            Long B = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.maxSquares(B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static Long maxSquares(Long B) {
        // Variable to store the result
        long r;
        
        // If B is less than or equal to 2, no squares can be formed
        if (B <= 2) {
            r = 0;
        }
        else {
            // Calculate the maximum number of squares that can be formed
            long n = (B / 2) - 1;
            r = (n * (n + 1)) / 2;
        }
        
        // Return the result
        return r;
    }
}
