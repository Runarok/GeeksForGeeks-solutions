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
            int n = sc.nextInt();
            
            Solution ob = new Solution();
            System.out.println(ob.isPart(n));
        }
    }
}
// } Driver Code Ends

class Solution{
    /**
     * Function to check if a number is prime.
     * @param n The input number.
     * @return true if n is prime, otherwise false.
     */
    public boolean prime(int n) {
        // Check divisibility from 2 to sqrt(n)
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false; // n is divisible by i, hence not prime
            }
        }
        return true; // n is prime
    }

    /**
     * Function to check if the number n + 2 is prime.
     * @param n The input number.
     * @return "Yes" if n + 2 is prime, otherwise "No".
     */
    public String isPart(int n) {
        if (prime(n + 2)) {
            return "Yes"; // n + 2 is prime
        }
        return "No"; // n + 2 is not prime
    }
}
