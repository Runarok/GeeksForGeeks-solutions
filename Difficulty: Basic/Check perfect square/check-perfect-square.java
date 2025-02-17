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

            System.out.println(ob.isPerfectSquare(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    static long isPerfectSquare(long n) {
        // Loop through numbers to check if the square of any number equals n
        for (int i = 1; i * i <= n; i++) {
            if (i * i == n) {
                return 1; // n is a perfect square
            }
        }
        return 0; // n is not a perfect square
    }
}
