//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(in.readLine());

            Solution ob = new Solution();
            System.out.println(ob.primeSum(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Function to calculate the sum of prime digits (2, 3, 5, 7) in the given number.
     * 
     * @param {int} n - The input number.
     * @returns {int} - The sum of prime digits in the number.
     */
    static int primeSum(int n) {
        int sum = 0; // Initialize sum to 0
        
        // Edge case: If the number is 1, return 0 (since 1 has no prime digits)
        if (n == 1) {
            return 0;
        }

        // Loop through each digit of the number
        while (n != 0) {
            int rem = n % 10; // Get the last digit of n
            // Check if the digit is a prime number (2, 3, 5, 7)
            if (rem == 2 || rem == 3 || rem == 5 || rem == 7) {
                sum = sum + rem; // Add the prime digit to the sum
            }
            n = n / 10; // Remove the last digit from n
        }

        // Return the final sum of prime digits
        return sum;
    }
}
