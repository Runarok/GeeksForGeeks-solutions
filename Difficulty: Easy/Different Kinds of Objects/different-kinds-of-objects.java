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
            String S[] = read.readLine().split(" ");
            int N = Integer.parseInt(S[0]);
            int K = Integer.parseInt(S[1]);
            String S1[] = read.readLine().split(" ");
            int A[] = new int[K];
            for (int i = 0; i < K; i++) A[i] = Integer.parseInt(S1[i]);
            Solution ob = new Solution();
            System.out.println(ob.expectedValue(N, K, A));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    long expectedValue(int totalIterations, int divisor, int array[]) {
        // Initialize sum variable to store the accumulated total
        long totalSum = 0L;
        
        // Get the length of the input array
        int arrayLength = array.length;
        
        // Loop through the array and accumulate the sum of its elements
        for (int i = 0; i < arrayLength; i++) {
            totalSum += array[i];
        }
        
        // Multiply the sum by the total number of iterations (N)
        totalSum *= totalIterations;
        
        // Divide the accumulated sum by the divisor (K)
        totalSum /= divisor;
        
        // Return the final computed value
        return totalSum;
    }
}
