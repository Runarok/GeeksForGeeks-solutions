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
            long n = Long.parseLong(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.canBeSumofConsec(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long canBeSumofConsec(long n) { 
        // If n is 1, it cannot be expressed as a sum of consecutive numbers
        if (n == 1) {
            return 0;
        }

        // If n is a power of 2 (only one bit set in binary representation), return 0
        if ((n & (n - 1)) == 0) {
            return 0;
        }

        // Otherwise, n can be represented as a sum of consecutive numbers
        return 1;
    }
}
