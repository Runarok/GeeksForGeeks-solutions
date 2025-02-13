//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String[] S = br.readLine().split(" ");
            int L = Integer.parseInt(S[0]);
            int R = Integer.parseInt(S[1]);
            Solution ob = new Solution();
            int ans = ob.Count(L, R);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to check if a number is prime
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false; // Numbers less than or equal to 1 are not prime
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false; // If divisible by any number other than 1 and itself, not prime
            }
        }
        return true; // Otherwise, it's a prime number
    }

    // Function to count the difference between composite and prime numbers in a given range
    public int Count(int left, int right) {
        int primeCount = 0;
        int compositeCount = 0;

        for (int num = left; num <= right; num++) {
            if (isPrime(num)) {
                primeCount++; // Count prime numbers
            } else {
                compositeCount++; // Count non-prime (composite) numbers
            }
        }
        
        return Math.abs(compositeCount - primeCount); // Return the absolute difference
    }
}
