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
            int ans = ob.NthTerm(N);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to find the Nth term based on the nearest prime number
    public int NthTerm(int N) {
        // Initialize two variables, i and j, to N for checking both directions
        int i = N;
        int j = N;
        
        // Loop until a prime number is found either below or above N
        while (true) {
            // Check if i is a prime number, if so, return the absolute difference with N
            if (isPrime(i)) {
                return Math.abs(N - i);
            }
            // Check if j is a prime number, if so, return the absolute difference with N
            if (isPrime(j)) {
                return Math.abs(N - j);
            }
            // Decrease i and increase j to check further values
            i--;
            j++;
        }
    }
    
    // Helper function to check if a number is prime
    boolean isPrime(int n) {
        // If the number is less than or equal to 1, it's not prime
        if (n <= 1) {
            return false;
        }
        // Check divisibility from 2 to the square root of the number
        for (int i = 2; i * i <= n; i++) {
            // If divisible, the number is not prime
            if (n % i == 0) {
                return false;
            }
        }
        // If no divisors were found, the number is prime
        return true;
    }
}
