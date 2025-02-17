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

            System.out.println(ob.setAllOddBits(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    /**
     * @param n - The input number
     * @return long - The number with all odd bits set
     */
    static long setAllOddBits(long n){
        // Initialize a mask to 0
        int mask = 0;
        
        // Copy of n for bit manipulation
        long temp = n;
        
        // Bit position counter
        int bitPosition = 0;
        
        // Generate a mask with only odd bits set, matching n's bit-length
        while (temp > 0) {
            if (bitPosition % 2 == 0) { // 0-based index (even index means 1-based odd position)
                mask |= (1 << bitPosition); // Set the bit in the mask
            }
            temp >>= 1; // Right shift temp to process the next bit
            bitPosition++; // Move to the next bit position
        }
        
        // Return the result of OR operation between n and the mask
        return n | mask;
    }
}
