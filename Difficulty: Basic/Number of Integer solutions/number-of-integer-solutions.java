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
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.noOfIntSols(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the number of integer solutions for the given equation
    static Long noOfIntSols(Long n) {
        // Using the formula for counting non-negative integer solutions:
        // (n+1) * (n+2) / 2
        return ((n + 1) * (n + 2)) / 2;
    }
}
