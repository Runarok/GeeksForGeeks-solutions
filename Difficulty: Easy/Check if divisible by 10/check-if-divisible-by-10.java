//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            Solution ob = new Solution();
            System.out.println(ob.isDivisibleBy10(S));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if a binary number is divisible by 10
    int isDivisibleBy10(String bin) {
        // Initialize variables
        String s = bin;
        int n = s.length(), ans = 0;
        
        // Iterate over each character of the binary string
        for (int i = 0; i < n; i++) {
            // Update the result by shifting and adding the current digit
            ans = (2 * ans) + (s.charAt(i) - '0');
            // Take modulo 10 to keep the result manageable
            ans = ans % 10;
        }
        
        // If the final result is divisible by 10, return 1, else return 0
        if (ans == 0) {
            return 1;
        }
        return 0;
    }
}
