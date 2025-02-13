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
            String a[] = in.readLine().trim().split("\\s+");
            long L = Long.parseLong(a[0]);
            long R = Long.parseLong(a[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.primeProduct(L, R));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long primeProduct(long L, long R) {
        long product = 1;
        int MOD = 1000000007;

        for (long num = L; num <= R; num++) {
            if (isPrime(num)) {
                product = (product * num) % MOD;
            }
        }

        return product;
    }

    // Function to check if a number is prime
    static boolean isPrime(long num) {
        if (num < 2) return false;
        
        for (long i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}
