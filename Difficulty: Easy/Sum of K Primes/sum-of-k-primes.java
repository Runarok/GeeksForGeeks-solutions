//{ Driver Code Starts
//Initial Template for Java



import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        
        Solution ob = new Solution();
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split("\\s+");
            int N = Integer.parseInt(input_line[0]);
            int K = Integer.parseInt(input_line[1]);
            boolean ans = ob.isSumOfKprimes(N, K);
            if(ans)
                System.out.println(1);
            else
                System.out.println(0);
        }
    }
}


// } Driver Code Ends

class Solution {
    // Function to check if a number is prime
    boolean isPrime(int num) {
        if (num <= 1) {
            return false; // Numbers less than or equal to 1 are not prime
        }
        if (num <= 3) {
            return true; // 2 and 3 are prime
        }
        if (num % 2 == 0 || num % 3 == 0) {
            return false; // Divisible by 2 or 3 is not prime
        }
        for (int i = 5; i * i <= num; i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false; // Check divisibility by numbers of the form 6k ± 1
            }
        }
        return true;
    }

    // Function to check if N can be expressed as a sum of K primes
    boolean isSumOfKprimes(int N, int K) {
        if (K == 1) {
            return isPrime(N); // If K is 1, check if N itself is prime
        }
        if (K == 2) {
            if (N < 4) {
                return false; // Cannot express numbers less than 4 as the sum of two primes
            }
            if (N % 2 == 0) {
                return true; // Even number greater than 2 can always be expressed as the sum of two primes
            }
            return isPrime(N - 2); // Check if N-2 is prime for odd numbers
        }
        if (K >= 3) {
            if (N < 2 * K) {
                return false; // N should be at least 2 * K to express it as a sum of K primes
            }
            return true; // For K >= 3, we can always express N as the sum of K primes
        }
        return false;
    }
}
