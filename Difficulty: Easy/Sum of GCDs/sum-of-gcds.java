//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {   
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int n = sc.nextInt();

            Solution ob = new Solution();
            System.out.println(ob.sumOfGCDofPairs(n));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    // Function to calculate the sum of GCD of all pairs (i, j) where 1 <= i, j <= N
    static long sumOfGCDofPairs(int N) {
        long sum = 0;
        
        // Loop over all divisors 'd' of N
        for (int d = 1; d * d <= N; d++) {
            if (N % d == 0) {  // Check if 'd' is a divisor of N
                int pairedDivisor = N / d;  // Find the paired divisor 'other'
                
                // Add the contribution of 'd' to the sum
                sum += (long) phi(d) * pairedDivisor;
                
                // If 'd' and 'pairedDivisor' are not the same, add the contribution of 'pairedDivisor' to the sum
                if (pairedDivisor != d) {
                    sum += (long) phi(pairedDivisor) * d;
                }
            }
        }
        return sum;  // Return the total sum of GCDs
    }
    
    // Function to calculate Euler's Totient Function (φ(n)) for a given number n
    static int phi(int n) {
        int result = n;
        
        // Iterate over all prime factors 'p' of n
        for (int p = 2; p * p <= n; p++) {
            if (n % p == 0) {
                // If 'p' is a divisor, divide out all occurrences of 'p' from n
                while (n % p == 0)
                    n /= p;
                // Update the result based on the factor 'p'
                result -= result / p;
            }
        }
        
        // If 'n' is greater than 1, then n is prime and we need to adjust the result for this prime factor
        if (n > 1)
            result -= result / n;
        
        return result;  // Return the final value of Euler's Totient Function
    }
    
    // For testing purposes
    public static void main(String[] args) {
        int N = 10;
        System.out.println("Sum of gcd pairs for N = " + N + " is " + sumOfGCDofPairs(N));
    }
}
