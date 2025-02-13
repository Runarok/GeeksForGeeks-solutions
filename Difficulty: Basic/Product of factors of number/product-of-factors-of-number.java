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
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.factorProduct(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


class Solution {
    // Function to calculate the product of all factors of N modulo 10^9+7
    int factorProduct(int N) {
        final int MOD = 1000000007;
        long product = 1;
        
        // Iterate through all possible factors up to sqrt(N)
        for (int i = 1; i * i <= N; i++) {
            if (N % i == 0) {
                // If i is a factor, multiply it with the product
                product = (product * i) % MOD;
                
                // Check if i and N/i are different factors
                if (i != N / i) {
                    product = (product * (N / i)) % MOD;
                }
            }
        }
        
        return (int) product; // Return the product modulo 10^9+7
    }
}
