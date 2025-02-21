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
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.isTidy(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if the number is a tidy number
    // A number is tidy if its digits are in non-decreasing order
    int isTidy(int N) {
        // Convert the number to a string to easily compare the digits
        String s = String.valueOf(N);

        // Iterate through the string starting from the second character
        for (int i = 1; i < s.length(); i++) {
            // If any digit is greater than the next digit, return 0 (not a tidy number)
            if (s.charAt(i - 1) > s.charAt(i)) {
                return 0;
            }
        }

        // If no such condition is found, return 1 (the number is tidy)
        return 1;
    }
}
