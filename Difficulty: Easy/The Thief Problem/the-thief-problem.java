//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking testcases count
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            // Creating a new ArrayList
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // taking elements count
            // int n = temp.length;
            int arr[] = new int[n];
            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) arr[i] = (Integer.parseInt(temp[i]));

            // taking k
            int k = Integer.parseInt(sc.nextLine());
            Solution ob = new Solution();
            // calling getMaxVal() method
            // and printing the result
            System.out.println(ob.getMaxVal(arr, k));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Function to calculate the maximum sum by selecting exactly k elements.
     * @param arr Array of integers.
     * @param k Number of elements to select.
     * @return Maximum possible sum of selected k elements.
     */
    public static int getMaxVal(int arr[], int k) {
        int n = arr.length;  // Total number of elements in array
        
        // Case when k is greater than or equal to the number of elements
        if (k >= n) {
            int totalSum = 0;
            for (int i = 0; i < n; i++) {
                totalSum += arr[i];
            }
            return totalSum;
        }
        
        // Sort the array in ascending order
        Arrays.sort(arr);

        // Sum up the largest k elements (which are at the end after sorting)
        int sum = 0;
        for (int i = n - 1; i >= n - k; i--) {
            sum += arr[i];
        }
        
        return sum;  // Return the maximum sum
    }
}
