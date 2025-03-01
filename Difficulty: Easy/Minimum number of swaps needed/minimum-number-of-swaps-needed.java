//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            
            int n = Integer.parseInt(read.readLine());
            String input[] = read.readLine().split(" ");
            
            int arr[] = new int[n];
            for(int i = 0;i<n;i++){
                arr[i] = Integer.parseInt(input[i]);
            }
            
            Solution ob = new Solution();
            System.out.println(ob.countSwaps(arr, n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    int res = 0;  // Variable to track the count of swaps

    // Merge function to merge two sorted halves and count inversions
    void merge(int arr[], int l, int m, int e) {
        int i, j, k;
        int n = e - l + 1;
        int[] finalarr = new int[n];  // Array to store merged results
        
        i = l; 
        j = m + 1;
        k = 0;
        
        // Merge the two halves while counting the inversions (swaps)
        while (i <= m && j <= e) {
            if (arr[i] <= arr[j]) {
                finalarr[k++] = arr[i++];  // If no inversion, just copy the element
            } else {
                finalarr[k++] = arr[j];  // If inversion found, count the swap
                res = res + (m - i + 1);  // Count how many elements are left in the left half
                j++;
            }
        }
        
        // Copy the remaining elements from the left half, if any
        while (i <= m) {
            finalarr[k++] = arr[i++];
        }
        
        // Copy the remaining elements from the right half, if any
        while (j <= e) {
            finalarr[k++] = arr[j++];
        }
        
        // Copy the merged result back into the original array
        for (i = l, k = 0; i <= e; i++, k++) {
            arr[i] = finalarr[k];
        }
    }

    // Split function to divide the array into subarrays and recursively merge them
    void split(int arr[], int l, int e) {
        if (l < e) {
            int m = (l + e) / 2;  // Find the middle index
            split(arr, l, m);  // Recursively split the left half
            split(arr, m + 1, e);  // Recursively split the right half
            merge(arr, l, m, e);  // Merge the two halves and count swaps
        }
    }

    // Function to count the number of swaps required to sort the array
    int countSwaps(int arr[], int n) {
        split(arr, 0, n - 1);  // Split and merge the entire array
        return res;  // Return the total number of swaps (inversions)
    }
}
