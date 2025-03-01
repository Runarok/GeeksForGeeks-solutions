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
            System.out.println(ob.nthSmartNum(n));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to find the nth Smart number
    static int nthSmartNum(int n) {
        int count = 0; // To keep track of how many Smart numbers we have found
        int num = 2;   // Starting number to check
        while (true) {
            if (isSmart(num)) { // Check if the current number is Smart
                count++;  // If it's a Smart number, increment the count
                if (count == n) { // If we've found the nth Smart number, return it
                    return num;
                }
            }
            num++; // Check the next number
        }
    }

    // Helper function to check if a number is a Smart number
    static boolean isSmart(int num) {
        int primeFactors = 0; // To count the distinct prime factors of the number
        for (int i = 2; i * i <= num; i++) { // Loop through potential prime factors
            if (num % i == 0) {  // If i is a factor of num
                primeFactors++;  // Increment prime factors count
                while (num % i == 0) {  // Divide num by i until it's no longer divisible
                    num /= i;
                }
            }
        }
        if (num > 1) {  // If num is still greater than 1, it's a prime factor
            primeFactors++;
        }
        return primeFactors >= 3; // Return true if there are 3 or more prime factors
    }
}
