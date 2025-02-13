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
            int n = Integer.parseInt(br.readLine().trim());
            String s = br.readLine().trim();
            String[] S = s.split(" ");
            int[] nums = new int[n];
            for(int i = 0; i < n; i++){
                nums[i] = Integer.parseInt(S[i]);
            }
            Solution ob = new Solution();
            boolean ans = ob.brainGame(nums);
            if(ans)
                System.out.println("A");
            else 
                System.out.println("B");     
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function template for Java

class Solution
{
    // Method to check if a given number is prime
    public boolean isPrime(int number) {
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) return false; // If divisible, it's not a prime number
        }
        return true; // Return true if no divisors are found
    }

    // Method to count the number of prime factors of a given number
    int primeFactor(int number) {
        int factorCount = 0;
        int tempNumber = number;

        // Iterate through possible divisors up to half of the number
        for (int divisor = 2; divisor <= tempNumber / 2; divisor++) {
            while (number % divisor == 0) { // Check divisibility
                factorCount++; // Increment count for each division
                number /= divisor; // Reduce the number
            }
        }
        return factorCount;
    }

    // Method to determine the winner of the brain game
    public boolean brainGame(int[] numbers) {
        int xorResult = 0;

        for (int number : numbers) {
            if (!isPrime(number)) {
                xorResult ^= (primeFactor(number) - 1); // Compute XOR of prime factor counts (minus 1)
            }
        }
        return xorResult != 0; // Return true if the result is non-zero, else false
    }
}
