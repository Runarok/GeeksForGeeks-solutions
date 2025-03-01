//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int N = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.isSphenicNo(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


class Solution {
    // Helper function to check if a number is prime
    public static boolean isPrime(int n) {
        // Numbers less than or equal to 1 are not prime
        if (n <= 1) {
            return false;
        } else if (n == 2) {
            return true;  // 2 is a prime number
        } else if (n % 2 == 0) {
            return false;  // Even numbers greater than 2 are not prime
        } else {
            // Check odd divisors from 3 to sqrt(n)
            for (int i = 3; i <= (int) Math.sqrt(n); i += 2) {
                if (n % i == 0) {
                    return false;  // If n is divisible by any odd number, it's not prime
                }
            }
        }
        return true;  // n is prime if no divisors were found
    }

    // Function to check if a number is a Sphenic number
    public int isSphenicNo(int N) {
        int count = 0, product = 1;
        
        // Loop through numbers from 2 to N
        for (int i = 2; i <= N; i++) {
            // Check if i is a prime factor of N
            if (isPrime(i) && N % i == 0) {
                count++;  // Increment the prime factor count
                product *= i;  // Multiply the prime factors
                
                // If there are more than 3 prime factors, return 0 (not a Sphenic number)
                if (count > 3) {
                    return 0;
                }
            }
        }
        
        // If there are exactly 3 prime factors and their product equals N, return 1 (Sphenic number)
        return (count == 3 && product == N) ? 1 : 0;
    }
}
