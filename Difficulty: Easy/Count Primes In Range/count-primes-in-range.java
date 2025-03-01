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
            String S[] = read.readLine().split(" ");
            int L = Integer.parseInt(S[0]);
            int R = Integer.parseInt(S[1]);
            Solution ob = new Solution();
            System.out.println(ob.countPrimes(L, R));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to count the number of primes in the range [L, R]
    int countPrimes(int L, int R) {
        // If R is less than 2, there are no primes in the range
        if (R < 2) return 0;

        // Calculate the square root of R to limit our sieve size
        int sqrtR = (int) Math.sqrt(R);

        // Get all primes up to sqrtR using the sieve function
        List<Integer> primes = sieve(sqrtR);

        // Boolean array to mark the primes in the range [L, R]
        boolean[] isPrime = new boolean[R - L + 1];
        Arrays.fill(isPrime, true);  // Assume all numbers in the range are primes

        // For each prime number up to sqrtR, mark the multiples as non-prime
        for (int prime : primes) {
            // Calculate the start index for marking multiples of prime
            int start = Math.max(prime * prime, (L + prime - 1) / prime * prime);
            for (int j = start; j <= R; j += prime) {
                isPrime[j - L] = false;
            }
        }

        // Count the primes in the range
        int count = 0;
        for (int i = 0; i < isPrime.length; i++) {
            if (isPrime[i] && (i + L) >= 2) count++;  // Exclude numbers less than 2
        }
        return count;
    }

    // Function to generate primes up to the square root of R using the Sieve of Eratosthenes
    List<Integer> sieve(int limit) {
        // Boolean array to mark prime numbers up to 'limit'
        boolean[] isPrime = new boolean[limit + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;  // 0 and 1 are not prime numbers

        // Use the Sieve of Eratosthenes to mark non-prime numbers
        for (int i = 2; i * i <= limit; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= limit; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        // Collect all prime numbers up to 'limit'
        List<Integer> primes = new ArrayList<>();
        for (int i = 2; i <= limit; i++) {
            if (isPrime[i]) primes.add(i);
        }
        return primes;
    }
}
