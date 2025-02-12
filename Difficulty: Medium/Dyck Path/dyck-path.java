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
            int N = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.dyckPaths(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    // Function to calculate the number of Dyck paths for a given N
    static Long dyckPaths(int N) {
        // Variables to hold the numerator and denominator for the Dyck path formula
        long numerator = 1;
        long denominator = 1;
        
        // Loop to calculate the binomial coefficient (2N choose N)
        for (int i = 0; i < N; i++) {
            // Multiply the numerator and denominator by the appropriate factors
            numerator *= (2 * N - i);  // Numerator: 2N, 2N-1, ..., N+1
            denominator *= (i + 1);    // Denominator: 1, 2, ..., N
            
            // To avoid overflow, reduce the fraction by dividing the numerator and denominator
            // by their greatest common divisor (gcd) at each step
            long gcd = gcd(numerator, denominator);  // Calculate the gcd of the numerator and denominator
            numerator /= gcd;  // Divide the numerator by gcd
            denominator /= gcd;  // Divide the denominator by gcd
        }
        
        // Return the result: divide the numerator by the denominator and the factor (N+1)
        return numerator / (denominator * (N + 1));  // Formula for Dyck paths: C(N) = (2N choose N) / (N + 1)
    }

    // Helper function to calculate the greatest common divisor (gcd) of two numbers
    private static long gcd(long a, long b) {
        if (b == 0) {
            return a;  // Base case: when b is 0, gcd is a
        }
        return gcd(b, a % b);  // Recursive step: gcd of b and remainder of a divided by b
    }
}
