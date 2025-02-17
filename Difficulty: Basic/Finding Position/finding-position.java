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

            System.out.println(ob.nthPosition(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    /**
     * @param n - The input number
     * @return long - The largest power of 2 that is less than or equal to n
     */
    static long nthPosition(long n){
        // Initialize result as 1 (the smallest power of 2)
        int result = 1;
        
        // Multiply result by 2 until it exceeds n
        while (result * 2 <= n) {
            result *= 2; // Keep doubling the result
        }
        
        // Return the largest power of 2 less than or equal to n
        return result;
    }
}
