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

            System.out.println(ob.totalDigits(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Function to count the total number of digits in all numbers from 1 to n.
     * @param n - The upper limit number.
     * @return Total count of digits used in all numbers from 1 to n.
     */
    static long totalDigits(long n) {
        // Initialize counter to track total digit count
        long count = 0;

        // Loop through all numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            int temp = i;

            // Count digits in the current number
            while (temp > 0) {
                count++;
                temp /= 10; // Remove last digit
            }
        }
        
        return count; // Return the total digit count
    }
}
