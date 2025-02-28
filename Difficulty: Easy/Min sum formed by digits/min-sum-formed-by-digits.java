//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main(String[] args) throws IOException
	{
	        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t =
            Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while(t-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            int a[] = new int[(int)(n)];
            String inputLine[] = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                a[i] = Integer.parseInt(inputLine[i]);
            }
            
            Solution obj = new Solution();
            System.out.println(obj.minSum(a, n));
            
        
System.out.println("~");
}
	}
}


// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to calculate the minimum sum by creating two numbers
    public static long minSum(int arr[], int n) {
        // If the array is empty, return 0
        if (n == 0) {
            return 0;
        }

        // If the array has only one element, return that element
        if (n == 1) {
            return arr[0];
        }

        // Initialize two numbers num1 and num2 to form the minimum sum
        long num1 = 0, num2 = 0;

        // Create a priority queue (min-heap) to easily retrieve the smallest elements
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // Add all elements from the array into the priority queue
        for (int i = 0; i < n; i++) {
            pq.add(arr[i]);
        }

        // While there are still elements in the priority queue
        while (!pq.isEmpty()) {
            // Add the smallest element to num1
            num1 = num1 * 10 + pq.poll();

            // If the priority queue is not empty, add the next smallest element to num2
            if (!pq.isEmpty()) {
                num2 = num2 * 10 + pq.poll();
            }
        }

        // Return the sum of the two numbers formed
        return num1 + num2;
    }
}
