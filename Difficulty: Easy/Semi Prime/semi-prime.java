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
            System.out.println(ob.checkSemiprime(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to check if a number is prime
    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;  // Numbers less than or equal to 1 are not prime
        } else if (n == 2) {
            return true;  // 2 is a prime number
        } else if (n % 2 == 0) {
            return false;  // Even numbers other than 2 are not prime
        } else {
            // Check divisibility for odd numbers up to the square root of n
            for (int i = 3; i <= (int) Math.sqrt(n); i += 2) {
                if (n % i == 0) {
                    return false;  // Found a divisor, hence not prime
                }
            }
        }
        return true;  // n is prime
    }

    // Function to check if a number is semiprime
    int checkSemiprime(int N) {
        // Iterate through all potential factors of N up to sqrt(N)
        for (int i = 2; i * i <= N; i++) {
            if (N % i == 0) {
                int quotient = N / i;  // Get the second factor of N
                // Check if both factors are prime
                if (isPrime(i) && isPrime(quotient)) {
                    return 1;  // N is a semiprime
                }
            }
        }
        return 0;  // N is not a semiprime
    }
}
