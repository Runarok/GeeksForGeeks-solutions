//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Driver_class {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt(); // taking testcases

        while (t-- > 0) {
            int n = sc.nextInt(); // taking number "n" as input
            System.out.println(
                new Solution().countDigits(n)); // prints the count of digits
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count the number of digits in a given integer n
    public static int countDigits(int n) {
        // If n is 0, return 0 (since 0 has no digits in this context)
        if (n == 0) return 0;
        
        // Recursively divide n by 10 and count the digits
        return countDigits(n / 10) + 1;
    }
}
