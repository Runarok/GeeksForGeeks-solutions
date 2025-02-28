//{ Driver Code Starts
// Initial Template for Java

// Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

class Solution {
    long maxFruits(long arr[], int m) {
        // Get the length of the array
        int n = arr.length;
        
        // If the number of elements in the array is less than or equal to m, 
        // simply return the sum of all elements in the array
        if (n <= m) {
            long total = 0;
            for (long fruit : arr) {
                total += fruit;
            }
            return total;
        }

        // Initialize the variables to track the maximum sum and the sum of the current window
        long maxSum = 0, windowSum = 0;

        // Calculate the sum of the first 'm' elements (the initial window)
        for (int i = 0; i < m; i++) {
            windowSum += arr[i];
        }
        
        // Set the initial max sum to the sum of the first 'm' elements
        maxSum = windowSum;

        // Use a sliding window to calculate the maximum sum of any m consecutive elements
        for (int i = m; i < (n + m) - 1; i++) {
            // Update the window sum by adding the next element and removing the element that is sliding out of the window
            windowSum += arr[i % n] - arr[(i - m) % n];
            
            // Update the max sum if the current window sum is greater
            if (windowSum > maxSum) {
                maxSum = windowSum;
            }
        }

        // Return the maximum sum found
        return maxSum;
    }
}



//{ Driver Code Starts.

// Driver class
class Array {

    // Driver code
    public static void main(String[] args) throws IOException {
        // Taking input using buffered reader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int testcases = Integer.parseInt(br.readLine());

        while (testcases-- > 0) {

            String line1 = br.readLine();
            String[] a1 = line1.trim().split("\\s+");
            int n = a1.length;
            long a[] = new long[n];
            for (int i = 0; i < n; i++) {
                a[i] = Long.parseLong(a1[i]);
            }
            int m = Integer.parseInt(br.readLine());
            Solution ob = new Solution();

            long ans = ob.maxFruits(a, m);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends