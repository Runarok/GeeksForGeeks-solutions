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
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.divisorProduct(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    static final int MOD = 1000000007;
    
    static long divisorProduct(long N) {
        long ans = 1; // Start with multiplication identity

        // Iterate through all numbers from 1 to sqrt(N) to find divisors
        for (long i = 1; i * i <= N; i++) {
            if (N % i == 0) {
                ans = (ans * i) % MOD; // Multiply the divisor i
                
                // Check the corresponding divisor N / i
                long otherDivisor = N / i;
                if (otherDivisor != i) { // Avoid double multiplication for perfect squares
                    ans = (ans * otherDivisor) % MOD;
                }
            }
        }
        return ans; // Return the product of divisors modulo MOD
    }
}
