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
            int a[] = new int[n];
            String inputLine[] = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                a[i] = Integer.parseInt(inputLine[i]);
            }
            
            Solution obj = new Solution();
            System.out.println(obj.maxOnes(a, n));
            
        
System.out.println("~");
}
	}
}
// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to find the maximum number of 1s after flipping a subarray
    public static int maxOnes(int a[], int n) {
        int count = 0;

        // Convert the array elements: 0 becomes 1 and 1 becomes -1
        // Count the initial number of 1's in the array
        for (int i = 0; i < n; i++) {
            if (a[i] == 0) {
                a[i] = 1;  // Flip 0 to 1
            } else {
                a[i] = -1; // Flip 1 to -1
                count++;   // Count the existing 1's
            }
        }

        int osum = Integer.MIN_VALUE; // Variable to store the maximum sum of subarray after flipping
        int csum = 0; // Variable to keep track of the current sum of the subarray

        // Apply Kadane's algorithm to find the maximum sum subarray
        for (int i = 0; i < n; i++) {
            csum = Math.max(a[i], csum + a[i]); // Either start a new subarray or extend the current one
            osum = Math.max(osum, csum); // Update the maximum sum if necessary
        }

        // If the maximum sum of the flipped subarray is greater than 0, add it to the count of 1's
        // Otherwise, return the count of 1's as no flip is beneficial
        return osum > 0 ? osum + count : count;
    }
}
