//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String S[] = read.readLine().split(" ");
            int A = Integer.parseInt(S[0]);
            int B = Integer.parseInt(S[1]);
            int N = Integer.parseInt(S[2]);
            Solution ob = new Solution();
            System.out.println(ob.count(A,B,N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count numbers in the range [A, B] with exactly N divisors
    static int count(int A, int B, int N) {
        // Initialize the counter for numbers with exactly N divisors
        int count = 0;
        
        // Iterate over all numbers in the range [A, B]
        for (int i = A; i <= B; i++) {
            // Check if the current number has exactly N divisors
            if (Divisor(i) == N) {
                count++;  // Increment the count if it has exactly N divisors
            }
        }
        
        return count;  // Return the total count
    }
    
    // Function to count the number of divisors of a given number x
    public static int Divisor(int x) {
        int divisorCount = 0;
        
        // Iterate from 1 to sqrt(x) to find divisors
        for (int i = 1; i <= Math.sqrt(x); i++) {
            // If i is a divisor of x
            if (x % i == 0) {
                divisorCount++;  // Increment the count for divisor i
                
                // If x/i is not the same as i, increment the count for divisor x/i as well
                if (x / i != i) {
                    divisorCount++;
                }
            }
        }
        
        return divisorCount;  // Return the total number of divisors
    }
}
