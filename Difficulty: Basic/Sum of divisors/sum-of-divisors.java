//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            long n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.divSum(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the sum of divisors of n
    static long divSum(long n) {
        long sum = 0;
        
        // Loop through all numbers from 1 to n/2 to find divisors
        for (int i = 1; i <= n / 2; i++) {
            // If i is a divisor of n, add it to the sum
            if (n % i == 0) {
                sum += i;
            }
        }
        
        // Return the sum of divisors
        return sum;
    }
}
