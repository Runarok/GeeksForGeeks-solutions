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
            
            Long L = Long.parseLong(S[0]);
            Long R = Long.parseLong(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.count3DivNums(L,R));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int count3DivNums(Long lowerBound, Long upperBound) {
        // Determine the square root of the upper bound
        int sqrtUpperBound = (int) Math.sqrt(upperBound);
        
        // Get all prime numbers up to sqrt(upperBound)
        List<Integer> primeNumbers = findPrimesUpTo(sqrtUpperBound);
        
        int count = 0;
        
        // Check squares of prime numbers within the given range
        for (int prime : primeNumbers) {
            long primeSquare = (long) prime * prime;
            if (primeSquare >= lowerBound && primeSquare <= upperBound) {
                count++;
            }
        }
        
        return count;
    }

    static List<Integer> findPrimesUpTo(int limit) {
        // Boolean array to track prime numbers
        boolean[] isPrime = new boolean[limit + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers
        
        // Sieve of Eratosthenes algorithm to mark non-prime numbers
        for (int num = 2; num * num <= limit; num++) {
            if (isPrime[num]) {
                for (int multiple = num * num; multiple <= limit; multiple += num) {
                    isPrime[multiple] = false;
                }
            }
        }

        // Collect all prime numbers into a list
        List<Integer> primeList = new ArrayList<>();
        for (int num = 2; num <= limit; num++) {
            if (isPrime[num]) {
                primeList.add(num);
            }
        }
        
        return primeList;
    }
}
