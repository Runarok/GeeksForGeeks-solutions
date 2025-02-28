//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;


// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to minimize the sum of pairwise sums
    long minimizeSum(int N, int arr[]) {
        // Create a min-heap (priority queue) to store the elements in ascending order
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        // Initialize a variable to store the total cost of the operations
        int cost = 0;
        
        // Add all elements of the array into the priority queue
        for (int i = 0; i < N; i++) {
            pq.add(arr[i]);
        }
        
        // While there are more than one element in the priority queue
        while (pq.size() > 1) {
            // Remove the two smallest elements from the heap
            int a = pq.remove();
            int b = pq.remove();
            
            // Calculate the sum of the two elements
            int curr = a + b;
            
            // Add the sum to the total cost
            cost += curr;
            
            // Insert the current sum back into the heap
            pq.add(curr);
        }
        
        // Return the final minimized sum (cost)
        return cost;
    }
}



//{ Driver Code Starts.

public class GFG
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        while (t-- > 0)
        {
            int n = sc.nextInt();
            int A[] = new int[n];
            
            for (int i = 0; i < n;i++)
            {
                A[i] = sc.nextInt();
            }
            Solution obj = new Solution();
            long ans = obj.minimizeSum(n, A);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends