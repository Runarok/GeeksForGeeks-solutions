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
            int A[] = new int[n];
            for(int i = 0;i<n;i++){
                A[i] = sc.nextInt();
            }
            Solution ob = new Solution();
            System.out.println(ob.lcmOfArray(n,A));
        }
    }
}
// } Driver Code Ends

class Solution{
    // Function to find LCM of an array
    static long lcmOfArray(int N, int A[]){
        long lcm = 1; // Initialize LCM as 1
        final long MOD = 1000000007; // Modulo value
        
        // Loop through all elements in the array
        for (int i = 0; i < N; i++) {
            // Update LCM by multiplying with current element and dividing by GCD of current LCM and element
            lcm = (lcm * A[i]) / gcd(lcm, A[i]);
            // Take modulo to avoid overflow
            lcm = lcm % MOD;
        }
        
        return lcm; // Return the final LCM modulo 1000000007
    }
    
    // Function to compute GCD using Euclidean algorithm
    static long gcd(long a, long b) {
        if (b == 0) return a; // Base case: if b is 0, return a
        return gcd(b, a % b); // Recursive call
    }
}
