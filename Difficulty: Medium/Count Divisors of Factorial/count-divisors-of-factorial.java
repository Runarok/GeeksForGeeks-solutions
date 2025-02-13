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
            long N = Long.parseLong(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.totalDivisors(N));
        }
    }
}
// } Driver Code Ends

class Solution{
    
    // Function to check if a number is prime
    public static boolean isPrime(long n) {
        if (n <= 1) {
            return false; // Numbers less than or equal to 1 are not prime
        } else if (n == 2) {
            return true; // 2 is prime
        } else if (n % 2 == 0) {
            return false; // Any even number other than 2 is not prime
        } else {
            // Check odd numbers from 3 to the square root of n
            for (long i = 3; i <= (long) Math.sqrt(n); i += 2) {
                if (n % i == 0) {
                    return false; // If n is divisible by i, it is not prime
                }
            }
        }
        return true; // n is prime if no divisors are found
    }

    // Function to calculate the total number of divisors of N
    static long totalDivisors(long N) {
        List<Long> primeNumbers = new ArrayList<>();
        
        if (N == 1) {
            return 1; // 1 has exactly one divisor: itself
        }

        // Collect all prime numbers less than or equal to N
        for (long i = 2; i <= N; i++) {
            if (isPrime(i)) {
                primeNumbers.add(0, i); // Add primes to the list in reverse order
            }
        }

        long divisorCount = 1; // Start with 1 as the base count

        // For each prime number, calculate its contribution to the divisor count
        for (long prime : primeNumbers) {
            long currentPrimePower = prime, primeFactorCount = 0;

            // Count the power of the current prime that divides N
            while ((N / currentPrimePower) > 0) {
                primeFactorCount += N / currentPrimePower;
                currentPrimePower *= prime; // Move to the next power of the prime
            }

            // Update the total number of divisors by multiplying by (exponent + 1)
            divisorCount *= (primeFactorCount + 1);
        }

        return divisorCount; // Return the total number of divisors of N
    }
}
