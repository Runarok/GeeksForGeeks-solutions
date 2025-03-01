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
            System.out.println(ob.isSumOfConsecutive(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// Back-end complete function Template for Java

class Solution {

    // Helper method to check if a number is a power of two.
    static boolean IsPowerOfTwo(int x) {
        // A number is a power of two if it is not zero and has only one bit set.
        return (x != 0) && ((x & (x - 1)) == 0);
    }

    // Main function to check if a number can be expressed as the sum of consecutive numbers.
    static String isSumOfConsecutive(int N) {
        
        // If N is a power of two, it can't be expressed as sum of at least two consecutive numbers,
        // else it is always possible.
        if (IsPowerOfTwo(N)) {
            return "No"; // Power of two numbers cannot be expressed as sum of consecutive numbers.
        } else {
            return "Yes"; // All other numbers can be expressed as sum of consecutive numbers.
        }
    }
}
