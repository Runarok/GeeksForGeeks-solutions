//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            Long n = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.numGame(n));
        }
    }
}
// } Driver Code Ends

class Solution {
     // Define MOD to avoid overflow
     static final long MOD = 1000000007;

     // Function to calculate the Greatest Common Divisor (GCD)
     static long gcd(long a, long b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    // Function to calculate Least Common Multiple (LCM) using GCD
     static long lcm(long a, long b) {
        return (a / gcd(a, b) * b) % MOD; // Use modulo to prevent overflow
    }

    // Function to calculate the result for the game
    static Long numGame(Long N) {
        long result = 1; // Initialize result as 1

        // Iterate from 1 to N to calculate the cumulative LCM
        for (int i = 1; i <= N; i++) {
            result = lcm(result, i); // Update the result by calculating LCM
            result %= MOD; // Take modulo at each step to avoid overflow
        }

        // Return the final result
        return result;
    }
}
