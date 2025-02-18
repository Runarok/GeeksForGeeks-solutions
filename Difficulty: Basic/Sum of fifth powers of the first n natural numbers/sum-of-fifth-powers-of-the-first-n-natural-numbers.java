//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.sumOfFifthPowers(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to calculate the sum of the fifth powers of integers up to N
    long sumOfFifthPowers(long N) {
        // Initialize the sum to 0
        long sum = 0;
        
        // Loop through all integers from 1 to N
        for(int i = 1; i <= N; i++) {
            // Add the fifth power of the current number to the sum
            sum += (long) i*i*i*i*i;
        }
        
        // Return the computed sum
        return sum;
    }
}
