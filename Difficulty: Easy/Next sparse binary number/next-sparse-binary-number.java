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
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.nextSparse(n));
        }
    }
}
// } Driver Code Ends

//User function Template for Java
class Solution {
    public int nextSparse(int n) {
        // Start with the given number and find the next sparse number
        int nextSparse = n;
        while (!isSparse(nextSparse)) {
            nextSparse++;
        }
        return nextSparse;
    }

    // Helper function to check if a number is sparse
    private boolean isSparse(int n) {
        int previousBit = 0;  // Tracks the previous bit
        while (n > 0) {
            int currentBit = n & 1;  // Extract the least significant bit
            if (currentBit == 1 && previousBit == 1) {
                return false;  // Consecutive set bits found, not sparse
            }
            previousBit = currentBit;  // Update previous bit
            n >>= 1;  // Shift bits to the right
        }
        return true;  // No consecutive set bits found, it's sparse
    }
}
