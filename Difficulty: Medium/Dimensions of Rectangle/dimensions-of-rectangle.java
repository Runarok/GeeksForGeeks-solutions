//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int A = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.rectangleCount(A));
        }
    }
}
// } Driver Code Ends

// User function template for Java

class Solution {
    static int rectangleCount(int A) {
        int count = 0;

        // Iterate through possible divisors up to sqrt(A)
        for (int i = 1; i <= Math.sqrt(A); i++) {
            if (A % i == 0) { // Check if i is a factor of A
                int pairFactor = A / i; // Corresponding factor

                // Skip if both factors are even
                if (i != pairFactor && i % 2 == 0 && pairFactor % 2 == 0) {
                    continue;
                }
                
                count++; // Count valid factor pairs
            }
        }
        return count;
    }
}
