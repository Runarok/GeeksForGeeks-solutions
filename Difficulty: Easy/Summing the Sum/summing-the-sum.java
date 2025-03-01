//{ Driver Code Starts
// Initial Template for Java

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
            int K = Integer.parseInt(S[2]);
            Solution ob = new Solution();
            System.out.println(ob.modifiedSum(N, M, K));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int MOD = 1000000007;

    long modifiedSum(int N, int M, int K) {
        // Initialize the sum variable to 0
        long sum = 0;

        // If M is 0, return K directly
        if (M == 0)
            return K;
            
        // Start with the result as the sum of the first N+K natural numbers
        long result = natural(N + K);
        
        // Repeat the process M-1 times
        while (M > 1) {
            result = natural(K + result);  // Add K to the result and calculate the natural sum
            M--;  // Decrease M to ensure the loop ends
        }

        // Return the result modulo 1000000007
        return result % MOD;
    }

    // Helper method to calculate the natural sum formula: n * (n + 1)
    long natural(long n) {
        return (n * (n + 1)) % MOD;
    }
}
