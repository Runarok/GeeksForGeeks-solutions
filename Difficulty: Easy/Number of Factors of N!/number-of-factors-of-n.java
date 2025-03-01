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
            int N=sc.nextInt();
			
            Solution ob = new Solution();
            long ans  = ob.factorsOfFactorial(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution{
    // Function to calculate the total number of factors of N!
    static long factorsOfFactorial(int N){
        // Step 1: Generate prime numbers up to N using Sieve of Eratosthenes
        boolean[] isPrime = new boolean[N+1];
        for (int i = 2; i <= N; i++) {
            isPrime[i] = true;  // Assume all numbers are prime initially
        }
        for (int i = 2; i * i <= N; i++) {
            if (isPrime[i]) {
                // Mark all multiples of i as non-prime
                for (int j = i * i; j <= N; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        // Step 2: Count prime factors in the prime factorization of N!
        long result = 1;  // Initialize result to 1
        for (int i = 2; i <= N; i++) {
            if (isPrime[i]) {
                int count = 0;
                int temp = i;
                // Count how many times 'i' divides N! by checking multiples of i
                while (temp <= N) {
                    count += N / temp;  // Add the number of multiples of 'i' in [1, N]
                    temp *= i;  // Increase the power of i
                }
                // Multiply the result by (count + 1) to account for the factors of i
                result *= (count + 1);
            }
        }
        
        // Step 3: Return the total number of factors of N!
        return result;
    }
}
