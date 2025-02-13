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
            System.out.println(ob.smithNum(n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if the number is a Smith number
    static int smithNum(int n) {
        // Calculate the sum of digits of the original number
        int sum = digitSum(n);
        boolean flag = false;

        // Check for factors of the number
        for (int i = 2; i * i <= n; i++) {
            // While the factor divides n, subtract the digit sum of the factor
            while (n % i == 0) {
                flag = true;
                sum -= digitSum(i);
                n /= i;
            }
        }
        
        // If the remaining number is a prime greater than 1, subtract its digit sum
        if (n != 1) {
            sum -= digitSum(n);
        }
        
        // If there was at least one prime factor and the sum of the digits is 0, return 1 (Smith number)
        if (flag == true && sum == 0) {
            return 1;
        }
        
        // Otherwise, return 0 (not a Smith number)
        return 0;
    }

    // Helper function to calculate the sum of digits of a number
    public static int digitSum(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10; // Add the last digit
            n /= 10; // Remove the last digit
        }
        return sum;
    }
}
