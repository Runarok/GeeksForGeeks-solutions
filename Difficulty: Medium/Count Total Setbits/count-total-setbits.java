//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(in.readLine());

            Solution ob = new Solution();
            System.out.println(ob.countBits(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static int countBits(int n) {
        int totalSetBits = 0; // Stores the total count of set bits (1s) from 0 to n

        for (int currentNumber = 0; currentNumber <= n; currentNumber++) {
            int temp = currentNumber; // Copy of the current number for bitwise operations

            while (temp > 0) {
                if ((temp & 1) == 1) { // Check if the least significant bit (LSB) is 1
                    totalSetBits++; // Increment count if the bit is set
                }
                temp = temp >> 1; // Right shift to check the next bit
            }
        }
        return totalSetBits; // Return the total number of set bits
    }
}
