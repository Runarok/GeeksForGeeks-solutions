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
            System.out.println(ob.collatzLength(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to apply the Collatz operations and count the steps to reach 1
    static int applyOperations(int n) {
        
        int ctr = 1;  // Initialize counter for the number of operations
        
        // Continue applying the operations until n becomes 1
        while (n > 1) {
            
            // If n is even, divide it by 2
            if (n % 2 == 0) {
                n /= 2;
            } else {
                // If n is odd, apply the transformation 3n + 1
                n = 3 * n + 1;
            }
            ctr++;  // Increment the operation counter
        }    
        
        // Return the total number of operations
        return ctr;
    }
    
    // Function to find the maximum number of operations for numbers from 1 to n
    static int collatzLength(int n) {
        // Variable to keep track of the maximum operations
        int maxOperations = 0;
        
        // Loop through all numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            
            // Apply the operations for each number
            int operations = applyOperations(i);
            
            // Update maxOperations if the current number's operations are higher
            if (operations > maxOperations) {
                maxOperations = operations;
            }
        }
        
        // Return the maximum number of operations found
        return maxOperations;
    }
}
