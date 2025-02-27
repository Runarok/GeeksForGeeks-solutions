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
            String S[] = read.readLine().split(" ");
            
            String N = S[0];
            String M = S[1];

            Solution ob = new Solution();
            System.out.println(ob.getCarries(N,M));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int getCarries(String N, String M) {
        int lengthN = N.length(), lengthM = M.length();
        int indexN = lengthN - 1;  // Pointer for string N (starting from the rightmost digit)
        int indexM = lengthM - 1;  // Pointer for string M (starting from the rightmost digit)
        int carry = 0;             // Current carry value
        int totalCarries = 0;       // Total number of carry operations

        while (indexN >= 0 || indexM >= 0) {
            // Extract digits from the strings (or use 0 if one string is shorter)
            int digitN = (indexN >= 0) ? N.charAt(indexN) - '0' : 0;
            int digitM = (indexM >= 0) ? M.charAt(indexM) - '0' : 0;
            
            int sum = digitN + digitM + carry;  // Sum of the digits and any carry from previous step

            if (sum > 9) {   // If sum is two digits, a carry occurs
                totalCarries++;
                carry = 1;   // Carry over to the next higher place value
            } else {
                carry = 0;   // No carry needed
            }
            
            indexN--;  // Move to next digit (left)
            indexM--;  // Move to next digit (left)
        }

        return totalCarries;  // Final count of carry operations
    }
}
