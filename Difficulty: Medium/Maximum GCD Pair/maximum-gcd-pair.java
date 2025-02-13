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
            int a[] = new int[n];
            for(int i = 0; i < n; i++){
                a[i] = sc.nextInt();
            }

            Solution ob = new Solution();
            System.out.println(ob.MaxGcd(n, a));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int MaxGcd(int n, int a[]) {
        // Array to store count of factors
        int[] gcds = new int[100_001];
        int maxFactor = 0;

        // Process each element to count its factors
        for (int val : a) {
            maxFactor = Math.max(findFactors(val, gcds), maxFactor);
        }

        // Find the largest GCD that appears more than once
        for (int i = maxFactor; i >= 1; i--) {
            if (gcds[i] > 1) {
                return i;
            }
        }

        return 1;
    }

    // Helper function to find factors of a number and update count
    private static int findFactors(int num, int[] gcds) {
        int maxFactor = 0;
        for (int i = 1; i * i <= num; i++) {
            if (num % i == 0) {
                if (num / i == i) { // If both divisors are the same
                    gcds[i]++;
                    maxFactor = Math.max(maxFactor, i);
                } else { // If divisors are different
                    gcds[i]++;
                    gcds[num / i]++;
                    maxFactor = Math.max(maxFactor, Math.max(i, num / i));
                }
            }
        }
        return maxFactor;
    }
}
