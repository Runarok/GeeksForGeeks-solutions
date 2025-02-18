//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            
            String S[] = read.readLine().split(" ");
            
            Long A = Long.parseLong(S[0]);
            Long B = Long.parseLong(S[1]);

            Solution ob = new Solution();

            System.out.println(ob.countCarry(A,B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int countCarry(Long A, Long B) {
        // Initialize count for carries and the carry value itself
        int count = 0;
        int carry = 0;

        // Iterate while A is greater than 0 (until all digits are processed)
        while (A > 0 || B > 0 || carry > 0) {
            // Get the last digit of A and B
            long digA = A % 10;
            long digB = B % 10;

            // If the sum of digits and carry is greater than 9, a carry is generated
            if (digA + digB + carry > 9) {
                carry = 1; // Set carry to 1
                count++;    // Increment carry count
            } else {
                carry = 0; // Reset carry
            }

            // Remove the last digit from A and B
            A = A / 10;
            B = B / 10;
        }

        // Return the total number of carries
        return count;
    }
}
