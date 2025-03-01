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
            String arr[] = in.readLine().trim().split("\\s+");
            int n = Integer.parseInt(arr[0]);
            int k = Integer.parseInt(arr[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.kthPrime(n, k));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    // Function to return the k-th prime factor of a given number n
    static int kthPrime(int n, int k){
        // Iterate through numbers from 2 to the square root of n
        for(int i=2; i<=Math.sqrt(n); i++){
            // Check for prime factors of n
            while(n % i == 0){
                k--; // Decrease k for each prime factor found
                if(k == 0) return i; // Return the k-th prime factor
                n /= i; // Divide n by the found factor
            }
        }
        // If n is a prime number and k == 1, return n, else return -1
        return (n != 1 && k - 1 == 0) ? n : -1;
    }
}
