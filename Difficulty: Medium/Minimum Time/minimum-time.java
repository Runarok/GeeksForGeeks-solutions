//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    int n = sc.nextInt();
                    int i = sc.nextInt();
                    int d = sc.nextInt();
                    int c = sc.nextInt();
                    
                    Solution ob = new Solution();
                    System.out.println(ob.minTimeForWritingChars(n, i, d, c));
                }
        }
}    
// } Driver Code Ends

class Solution
{
    // Function to calculate the minimum time for writing characters
    public int minTimeForWritingChars(int N, int I, int D, int C) 
    { 
        // Array to store the intermediate results of dp calculations
        int store[] = new int[N + 1];
        
        // Initialize the array with -1 to indicate uncomputed values
        for(int i = 0; i <= N; i++)
            store[i] = -1;
        
        // Call the dp function to compute the result
        return dp(N, I, D, C, store);
    } 

    // Recursive dp function to compute the minimum time
    public int dp(int n, int I, int D, int C, int store[])
    {
        // Base case: when there's only one character, the time is the time for a single input
        if (n == 1)
            return I;
        
        // If the result for this n is already computed, return it
        if (store[n] != -1)
            return store[n];
        
        // If n is even, calculate time for halving or reducing by 1
        if (n % 2 == 0) {
            int v1 = dp(n / 2, I, D, C, store) + C;  // Time to halve and add the cost of copying
            int v2 = dp(n - 1, I, D, C, store) + I;  // Time to reduce by 1 and add the input cost
            store[n] = Math.min(v1, v2); // Store the minimum of the two
            return store[n];
        }

        // If n is odd, calculate the best time by considering both halving approaches
        int v1 = dp(n / 2, I, D, C, store) + C + I;  // Halve, then add the costs
        int v2 = dp((n + 1) / 2, I, D, C, store) + C + D;  // Halve the next, then add the costs
        int v3 = dp(n - 1, I, D, C, store) + I;  // Reduce by 1 and add the input cost
        store[n] = Math.min(v1, v2);  // Store the minimum of v1 and v2
        store[n] = Math.min(store[n], v3);  // Store the minimum of all three approaches
        
        return store[n];  // Return the computed time for n characters
    }
}
