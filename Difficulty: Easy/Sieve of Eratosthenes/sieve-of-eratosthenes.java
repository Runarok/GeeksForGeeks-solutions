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
            ArrayList<Integer> primes  = ob.sieveOfEratosthenes(N);
            for(int prime : primes) {
                System.out.print(prime+" ");
            }
            System.out.println();
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to return all prime numbers up to N using Sieve of Eratosthenes
    static ArrayList<Integer> sieveOfEratosthenes(int N) {
        ArrayList<Integer> primes = new ArrayList<>(); // List to store prime numbers
        boolean[] isPrime = new boolean[N + 1]; // Boolean array to mark prime numbers

        // Initialize all numbers as prime (set to true initially)
        for (int i = 2; i <= N; i++) {
            isPrime[i] = true; // Mark each number as potential prime
        }

        // Apply the Sieve of Eratosthenes algorithm
        for (int i = 2; i * i <= N; i++) {
            if (isPrime[i]) { // If the number is still marked as prime
                // Mark all multiples of i as non-prime
                for (int j = i * i; j <= N; j += i) {
                    isPrime[j] = false; // Mark multiple as not prime
                }
            }
        }

        // Collect all prime numbers
        for (int i = 2; i <= N; i++) {
            if (isPrime[i]) {
                primes.add(i); // Add the prime number to the list
            }
        }

        // Return the list of prime numbers
        return primes;
    }
}
