//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            long N = Long.parseLong(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.squareFactor(N));
        }
    }
}
// } Driver Code Ends

class Solution{
    // Function to count how many square factors N has
    static int squareFactor(long N){
        // Initialize a counter to keep track of the square factors
        int count = 0;

        // Loop through all numbers from 1 to the square root of N
        for(long i = 1; i <= Math.sqrt(N); i++) {
            // Check if i^2 is a divisor of N
            if(N % (i * i) == 0) {
                // Increment the counter if a square factor is found
                count++;
            }
        }
        
        // Return the total count of square factors
        return count;
    }
}
