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
            int n = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.nthFortunateNum(n));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to check if a number is prime
    public static boolean isPrime(long n) {
        if (n <= 1) {
            return false; // Numbers less than or equal to 1 are not prime
        } else if (n == 2) {
            return true; // 2 is prime
        } else if (n % 2 == 0) {
            return false; // Even numbers other than 2 are not prime
        } else {
            // Check divisibility from 3 up to sqrt(n)
            for (long i = 3; i <= Math.sqrt(n); i += 2) {
                if (n % i == 0) {
                    return false; // Divisible by any odd number, hence not prime
                }
            }
        }
        return true; // If no divisors found, n is prime
    }

    // Function to find the nth fortunate number
    static long nthFortunateNum(int n) {
        // List of the first 15 primes
        int[] primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47};
        
        // Calculate the primorial (product of the first n primes)
        long primorial = 1;
        for (int i = 0; i < n; i++) {
            primorial *= primes[i]; // Multiply each prime to get the primorial
        }
        
        // Find the smallest m > 1 such that primorial + m is prime
        long m = 2;
        while (!isPrime(primorial + m)) {
            m++; // Increment m until primorial + m is prime
        }
        
        return m; // Return the smallest m found
    }
}
