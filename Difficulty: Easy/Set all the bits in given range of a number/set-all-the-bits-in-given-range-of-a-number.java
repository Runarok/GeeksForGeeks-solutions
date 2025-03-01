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
            String S[] = read.readLine().split(" ");
            
            int N = Integer.parseInt(S[0]);
            int L = Integer.parseInt(S[1]);
            int R = Integer.parseInt(S[2]);

            Solution ob = new Solution();
            System.out.println(ob.setAllRangeBits(N,L,R));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    static int setAllRangeBits(int N, int L, int R) {
        // Convert 1-based indices to 0-based for bit manipulation.
        L--;

        // Initialize a bitmask with the bit at position L set.
        int bitMask = 1 << L;

        // Loop from position L to (R-1) and set each bit in the range.
        while (L != R) {
            N = N | bitMask;  // Set the bit at the current position.
            L++;
            bitMask = bitMask << 1;  // Move to the next bit position.
        }

        return N;  // Return the updated number after setting bits.
    }
};
