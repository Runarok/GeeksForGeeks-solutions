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
            System.out.println(ob.nearestPowerOf2(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the nearest power of 2 greater than or equal to the given number
    public static long nearestPowerOf2(long num) {
        long highestBitPosition = bits(num);

        // Check if num is already a power of 2
        if (num == (1L << (highestBitPosition - 1))) {
            return num;
        } else {
            return (1L << highestBitPosition); // Return the next power of 2
        }
    }

    // Function to determine the number of bits required to represent the number
    public static long bits(long n) {
        return (long) (Math.log(n) / Math.log(2)) + 1;
    }
}
