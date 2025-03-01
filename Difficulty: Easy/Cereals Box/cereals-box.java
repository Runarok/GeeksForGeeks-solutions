//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner s = new Scanner(System.in);
        int t = s.nextInt();
        while(t-- > 0)
        {
            int N = s.nextInt();
            int K = s.nextInt();
            int a[] = new int[N];
            for(int i = 0;i<N;i++)
            {
                a[i] = s.nextInt();
            }
            Solution ob = new Solution();
            System.out.println(ob.minSum(a,N,K));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long minSum(int a[], int N, int k) {
        // Priority queue to store values in reverse order (max-heap)
        PriorityQueue<Double> max = new PriorityQueue<>(Collections.reverseOrder());
        
        // Add all elements of array a[] to the max-heap
        for (int n : a) {
            max.add((double) n);
        }
        
        // Apply the reduction process k times
        for (int i = 0; i < N; i++) {
            // Extract the maximum element from the heap
            double n = max.poll();  
            
            // If the value is greater than or equal to k, reduce it by either k or 10% of the value
            if (n >= k) {
                double reduction = Math.max(k, (double)(n * 0.1)); 
                n -= reduction;  // Reduce the value by the calculated reduction
            } else {
                // If the value is less than k, set it to 0
                n = 0;  
            }
            
            // Reinsert the modified value back into the heap
            max.add(n);  
        }
        
        // Calculate the sum of all elements remaining in the heap
        double sum = 0;
        while (!max.isEmpty()) {
            sum += max.poll();  // Accumulate values from the heap
        }
        
        // Return the sum as a long
        return (long) sum;
    }
}
