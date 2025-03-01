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
            int n = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.getLargest(n));
        }
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution {
    
    // Function to get the largest sum of digits of divisors of n
    static int getLargest(int n) {
        int maxSum = 0; // Initialize the maximum sum of digits as 0
        
        // Loop through all divisors of n
        for (int i = 1; i <= Math.sqrt(n); i++) {
            // Check if i is a divisor of n
            if (n % i == 0) {
                maxSum = Math.max(maxSum, sumOfDigits(i)); // Update maxSum with sum of digits of divisor i
                
                // Check the corresponding divisor n/i
                if (i != n / i) {
                    maxSum = Math.max(maxSum, sumOfDigits(n / i)); // Update maxSum with sum of digits of divisor n/i
                }
            }
        }
        return maxSum; // Return the largest sum of digits
    }

    // Function to calculate sum of digits of a number
    static int sumOfDigits(int n) {
        int sum = 0; // Initialize sum of digits
        // Loop to add digits of n
        while (n > 0) {
            sum += n % 10; // Add the last digit to sum
            n /= 10; // Remove the last digit
        }
        return sum; // Return the sum of digits
    }
}
