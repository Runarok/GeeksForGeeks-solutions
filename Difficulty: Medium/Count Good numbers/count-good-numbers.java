//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            long N;
            N = Long.parseLong(br.readLine().trim());

            Solution obj = new Solution();
            int res = obj.countGoodNumbers(N);

            System.out.println(res);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    static int MOD = 1_000_000_007; // Modulo value to prevent overflow

    public static int countGoodNumbers(long N) {
        // Number of even-positioned digits (0-based index)
        long evenPositions = (N + 1) / 2; 
        
        // Number of odd-positioned digits
        long oddPositions = N / 2; 
        
        // Calculate the total count using modular exponentiation
        return (int)((modularExponentiation(5, evenPositions) * 
                      modularExponentiation(4, oddPositions) % MOD));
    }

    public static long modularExponentiation(long base, long exponent) {
        if (exponent == 0) {
            return 1; // Base case: any number raised to power 0 is 1
        }

        long halfPower = modularExponentiation(base, exponent / 2);
        
        if (exponent % 2 == 0) {
            return (halfPower * halfPower) % MOD; // If even exponent
        } else {
            return (base * halfPower * halfPower) % MOD; // If odd exponent
        }
    }
}
