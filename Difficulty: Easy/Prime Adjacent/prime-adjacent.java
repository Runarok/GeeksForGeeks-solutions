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
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            if(ob.primeAdjacent(N) == 1)
                System.out.println("Y");
            else
                System.out.println("N");
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    
    // Function to check if a number is prime
    static boolean isprime(int num) {
        // Check divisibility from 2 up to the square root of num
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;  // If divisible, it's not a prime
        }
        return true;  // Otherwise, it's a prime number
    }
    
    // Function to check if N has prime adjacent numbers (N-1 and N+1)
    static int primeAdjacent(int N) {
        // If N is 2, return 0 as 2 has no adjacent primes
        if (N == 2) return 0;
        
        // Check if both N-1 and N+1 are prime
        if (isprime(N - 1) && isprime(N + 1)) return 1;  // Return 1 if both are prime
        
        return 0;  // Return 0 if one or both are not prime
    }
}
