//{ Driver Code Starts
//Initial Template for Java
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String[] S = new String[2];
            S = read.readLine().split(" "); 
            long a = Integer.parseInt(S[0]);
            long b = Integer.parseInt(S[1]);
            Solution ob = new Solution();

            System.out.println(ob.commDiv(a, b));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the number of common divisors of two numbers a and b
    static long commDiv(long a, long b) {
        long count = 0;
        
        // Determine the smaller number to iterate up to
        if (a > b) {
            // Loop through all numbers from 1 to a (since a > b, we use a as the upper limit)
            for (int i = 1; i <= a; i++) {
                // Check if i is a divisor of both a and b
                if (a % i == 0 && b % i == 0) {
                    count++;  // Increment the count if i is a common divisor
                }
            }
        } else {
            // Loop through all numbers from 1 to b
            for (int j = 1; j <= b; j++) {
                // Check if j is a divisor of both a and b
                if (a % j == 0 && b % j == 0) {
                    count++;  // Increment the count if j is a common divisor
                }
            }
        }
        
        // Return the total count of common divisors
        return count;
    }
}
