//{ Driver Code Starts


import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.prodTwoDigit(N));
        }
    }
}
// } Driver Code Ends


class Solution {
    static long prodTwoDigit(long N) {
        // If N is 0, return 0 as there are no two-digit products to calculate
        if (N == 0) {
            return 0;
        }
        
        // Initialize the result as 1 and set the modulus value
        long ans = 1;
        long mod = 1000000007;
        
        // Loop through the number, extracting two-digit numbers and multiplying them
        while (N != 0) {
            // Extract the last two digits of N
            long k = N % 100;
            // Remove the last two digits from N
            N /= 100;
            
            // Multiply the current two-digit number with the result
            ans = ans * k;
            // Apply the modulus operation to prevent overflow
            ans = ans % mod;
        }
        
        // Return the final result
        return ans;
    }
}
