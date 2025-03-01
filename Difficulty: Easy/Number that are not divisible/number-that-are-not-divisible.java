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
            System.out.println(ob.noOfNumbers(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to calculate the number of valid numbers <= N 
    // that are divisible by any of the numbers in the prime set {2, 3, 5, 7}.
    static Long noOfNumbers(Long N) {
        // Define the set of primes: 2, 3, 5, and 7
        int primes[] = {2, 3, 5, 7};
        
        // Calculate the number of subsets of primes (2^4 = 16)
        int subsets = (1 << primes.length);
        
        // Variable to store the final count
        long count = 0;
        
        // Loop through all subsets (except the empty subset)
        for (int i = 1; i < subsets; i++) {
            int product = 1;
            int bits = Integer.bitCount(i);

            // Multiply the primes corresponding to the bits set in i
            for (int j = 0; j < primes.length; j++) {
                if ((i & (1 << j)) != 0) {
                    product *= primes[j];
                }
            }

            // Inclusion-exclusion: add if odd number of primes, subtract if even
            if (bits % 2 == 1) {
                count += N / product;
            } else {
                count -= N / product;
            }
        }
        
        // Return the final count of numbers that are not divisible by any of the primes
        return N - count;
    }
}
