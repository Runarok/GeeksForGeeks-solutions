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
            
            Long X = Long.parseLong(S[0]);
            Long K = Long.parseLong(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.smallestKDigitNum(X,K));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static Long smallestKDigitNum(Long X, Long K) {
        // Calculate the smallest K-digit number
        Long smallestKDigit = (long) Math.pow(10, K - 1);

        // If the smallest K-digit number is divisible by X, return it
        if (smallestKDigit % X == 0) {
            return smallestKDigit;
        }

        // Otherwise, find the next number that is divisible by X
        return smallestKDigit + (X - smallestKDigit % X);
    }
}
