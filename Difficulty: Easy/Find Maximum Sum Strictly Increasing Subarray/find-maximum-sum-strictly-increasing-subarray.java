//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG
{
	public static void main(String[] args) throws IOException
	{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while(t-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            int arr[] = new int[n];
            String inputLine[] = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            
            Solution obj = new Solution();
            System.out.println( obj.maxsum_SIS(arr, n) );
            
        }
	}
}

// } Driver Code Ends

//User function Template for Java

class Solution { 

    // Return maximum sum of strictly increasing subarrays 
    static int maxsum_SIS(int arr[], int n) 
    {
        // Initialize variables to track the maximum sum and the current sum of the increasing subarray
        int maxsum = 0;
        int currsum = arr[0];

        // Traverse through the array
        for(int i = 1; i < n; i++) {
            // If current element is greater than the previous one, add it to the current sum
            if(arr[i] > arr[i - 1]) {
                currsum += arr[i];
            } else {
                // If the sequence is broken, update the maxsum and reset the current sum
                maxsum = Math.max(maxsum, currsum);
                currsum = arr[i];
            }
        }

        // Return the maximum of the last sequence's sum and the global maxsum
        maxsum = Math.max(maxsum, currsum);
        return maxsum;
    }
}
