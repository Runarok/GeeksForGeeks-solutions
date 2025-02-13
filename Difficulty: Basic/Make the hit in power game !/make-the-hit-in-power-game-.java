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
            
            long X = Long.parseLong(S[0]);
            long N = Long.parseLong(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.powerGame(X,N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static Long powerGame(long base, long exponent) {
        
        long result = 0; // Stores the final result
        long currentPower = base; // Stores the current power of base

        for (int i = 1; i <= exponent; i++) {
            long temp = currentPower;
            long lastDigit = temp % 10; // Extract last digit
            
            // Extract first digit
            while (temp >= 10) {
                temp /= 10;
            }
            long firstDigit = temp;

            // Construct the final result
            result += firstDigit;
            result *= 10;
            result += lastDigit;
            result *= 10;

            // Compute next power of base
            currentPower *= base;
        }

        // Remove the extra multiplication by 10 at the end
        result /= 10;

        return result;
    }
}
