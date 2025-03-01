//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.evenlyDivides(N));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count how many digits of 'n' divide 'n' evenly
    static int evenlyDivides(int n) {
        int num = n;  // Store the original number
        int count = 0; // Counter to keep track of divisible digits
        int val = 0;   // Variable to hold the current digit

        // Loop through each digit of the number
        while (num > 0) {
            val = num % 10;  // Extract the last digit
            if (val != 0 && n % val == 0) {  // If the digit is non-zero and divides 'n' evenly
                count++;  // Increment the count
            }
            num = num / 10;  // Remove the last digit
        }
        
        // Return the count of digits that divide 'n' evenly
        return count;
    }
}
