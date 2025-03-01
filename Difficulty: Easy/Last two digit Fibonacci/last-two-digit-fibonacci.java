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
            long N = Long.parseLong(read.readLine());
            Solution ob = new Solution();
            int ans=ob.fibonacciDigits(N);
            if(ans/10>0)
             System.out.println(ans);
            else
             System.out.println("0"+ans);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the last two digits of the Nth Fibonacci number
    int fibonacciDigits(long N) {
        // Pisano period for mod 100 is 300
        int pisanoPeriod = 300;
        N = N % pisanoPeriod;  // Reduce N within the Pisano period

        // Handle base cases
        if (N == 0) return 0;  // The 0th Fibonacci number is 0
        if (N == 1) return 1;  // The 1st Fibonacci number is 1

        // Variables to store the previous two Fibonacci numbers
        int a = 0, b = 1, c;

        // Calculate Fibonacci mod 100 using iterative approach
        for (int i = 2; i <= N; i++) {
            c = (a + b) % 100;  // Get the last two digits of Fibonacci number
            a = b;  // Update a to the previous Fibonacci number
            b = c;  // Update b to the current Fibonacci number
        }

        // If the last two digits are less than 10, return the single digit (e.g., 02 as 2)
        if (b < 10) {
            return b;  // Single digit (e.g., 02 should be returned as 2)
        } else {
            return b;  // Return the last two digits of the Fibonacci number
        }
    }
}
