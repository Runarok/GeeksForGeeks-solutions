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
            String S=read.readLine();
            Solution ob = new Solution();
            System.out.println(ob.DivisibleByEight(S));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if the number formed by the last three digits of the string is divisible by 8
    int DivisibleByEight(String s) {
        // Get the length of the string
        int len = s.length();
        
        // If the string has fewer than 3 digits, use the entire number, else use the last 3 digits
        String lastThree = (len < 3) ? s : s.substring(len - 3);
        
        // Convert the last three digits to an integer
        int num = Integer.parseInt(lastThree);

        // Check divisibility by 8 and return the result
        return (num % 8 == 0) ? 1 : -1;  // Return 1 if divisible by 8, else return -1
    }
}
