//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class Geeks
{
    public static void main(String args[])throws IOException
    {
        BufferedReader in=new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out=new PrintWriter(System.out);
        int t = Integer.parseInt(in.readLine().trim());
        
        while(t-- > 0)
        {
            int n =Integer.parseInt(in.readLine().trim());
            int arr[] = new int[n];
            String s[]=in.readLine().trim().split(" ");
            for(int i = 0; i < n; i++)
             arr[i] = Integer.parseInt(s[i]);
             
            out.println(new Solution().maxLength(arr, n)); 
        
out.println("~");
}
        out.close();
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to find the maximum length of a subarray with an even number of negative elements
    int maxLength(int nums[], int n) { 
        int start = 0; // Starting index of the current subarray
        int max = 0;   // Variable to store the maximum length of subarray found
        int prod = 1;  // Product of elements in the subarray (not used here)
        int firstNegative = -1; // Index of the first negative element in the subarray
        int negCount = 0; // Counter for negative elements in the current subarray
        
        // Traverse through the array to find the valid subarrays
        for (int end = 0; end < nums.length; end++) {
            
            // If the current element is 0, reset the tracking variables
            if (nums[end] == 0) {
                firstNegative = -1;
                negCount = 0;
                start = end + 1; // Move the start index to the next element
            } else {
                // If the current element is negative, update the count of negative elements
                if (nums[end] < 0) {
                    negCount++;
                    if (firstNegative == -1) {
                        firstNegative = end; // Store the index of the first negative element
                    }
                }
                
                // If the count of negative elements is even, update the maximum subarray length
                if (negCount % 2 == 0) {
                    max = Math.max(max, end - start + 1);
                } else {
                    // If the count of negative elements is odd, consider the subarray from the first negative element
                    max = Math.max(max, end - firstNegative);
                }
            }
        }
        
        // Return the maximum length of the subarray with an even number of negative elements
        return max;
    }
}
