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
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int l = Integer.parseInt(input[0]); 
            int r = Integer.parseInt(input[1]); 
            Solution ob = new Solution();
            System.out.println(ob.sumOfAll(l,r));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to calculate the sum of all prime factors for numbers in the range [l, r]
    public int sumOfAll(int l, int r)
    {
        // Array to store sum of prime factors for each number from 1 to r
        int primeFactorSum[] = new int[r + 1];
        
        // Using a sieve-like approach to compute prime factors sum for each number
        for (int i = 2; i <= r; i++) {
            if (primeFactorSum[i] == 0) {
                // 'i' is a prime number, so add 'i' to all its multiples
                for (int j = i; j <= r; j += i) {
                    primeFactorSum[j] += i;
                }
            }
        }
        
        // Sum up the prime factor sums for all numbers in the range [l, r]
        int totalSum = 0;
        for (int i = l; i <= r; i++) {
            totalSum += primeFactorSum[i];
        }
        
        return totalSum;
    }
}
