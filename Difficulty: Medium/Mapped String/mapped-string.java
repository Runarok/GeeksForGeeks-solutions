//{ Driver Code Starts
// Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            long N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.mapStr(N));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Modulo constant for large numbers to prevent overflow
    static final int mod = (int)1e9+7;

    /**
     * Function to calculate the factorial of a number modulo 10^9+7.
     * @param n - The number for which the factorial is to be calculated.
     * @return - The factorial of n modulo 10^9+7.
     */
    static long mapStr(long n)
    {
        // Initialize the result to 1, as factorial starts from 1
        long result = 1;

        // Loop to calculate the factorial by multiplying from n down to 1
        for (long i = n; i > 0; i--) {
            result = (result * i) % mod;  // Multiply and take modulo at each step
        }

        // Return the factorial modulo 10^9+7
        return result % mod;
    }
}
