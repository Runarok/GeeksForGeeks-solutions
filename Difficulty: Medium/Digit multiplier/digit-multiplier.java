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
            System.out.println(ob.getSmallest(N));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to get the smallest number whose digits are factors of N
    static String getSmallest(Long N) {
        // If N is 1, return "1" as it's the smallest number possible
        if (N == 1) return "1";
        
        StringBuilder sb = new StringBuilder(); // To build the result string
        
        // Loop until N becomes 1
        while (N > 1) {
            boolean found = false;  // Flag to check if a factor is found
            // Try dividing N by digits from 9 to 2
            for (int i = 9; i >= 2; i--) {
                if (N % i == 0) {  // If i is a divisor of N
                    sb.insert(0, i); // Add the digit to the front of the result
                    N /= i;           // Divide N by i
                    found = true;      // Mark that a factor was found
                    break;             // Exit the loop once a factor is found
                }
            }
            // If no factor is found, return "-1" as it's impossible to factorize N
            if (!found) return "-1";
        }
        
        // Return the final string which represents the smallest number
        return sb.toString();
    }
}
