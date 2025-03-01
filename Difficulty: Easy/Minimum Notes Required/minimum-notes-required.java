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
            int M = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.getLoss(N,M));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int getLoss(int n, int m) {
        // Original amount of money
        int originalAmount = n;

        // Array of available coin denominations
        int coinDenominations[] = { 1, 2, 5, 10, 20, 50, 100, 500, 1000 };
        
        // Variable to store the total value of coins used
        int totalCoinValueUsed = 0;

        // Iterate through the coins from largest to smallest denomination
        for (int i = coinDenominations.length - 1; i >= 0; i--) {
            // Keep subtracting the current coin denomination from the amount 'n' while possible
            while (n >= coinDenominations[i]) {
                n -= coinDenominations[i];
                
                // If no more coins can be used, exit the loop
                if (m == 0)
                    break;

                // Add the value of the coin to the total
                totalCoinValueUsed += coinDenominations[i];
                
                // Decrease the number of coins we can still use
                m--;
            }
        }

        // Return the remaining amount after subtracting the total coin value used
        return originalAmount - totalCoinValueUsed;
    }
}
