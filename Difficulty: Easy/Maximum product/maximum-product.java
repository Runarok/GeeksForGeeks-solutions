//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim());

        while (t-- > 0) {
            // Read the array elements from input
            String line = read.readLine().trim();
            String[] numsStr = line.split(" ");
            int[] nums = new int[numsStr.length];
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            // Read the value of k
            int k = Integer.parseInt(read.readLine().trim());

            // Create an instance of the Solution class
            Solution ob = new Solution();

            // Call the maxProductSubarrayOfSizeK function and print the result
            long ans = ob.maxProductSubarrayOfSizeK(nums, k);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends

class Solution {
    // Method to find the maximum product of a subarray of size k
    public long maxProductSubarrayOfSizeK(int[] arr, int k) {
        long res = 1; // Initialize result to 1, as it will store the product
        int n = arr.length;
        Arrays.sort(arr); // Sort the array to facilitate choosing pairs for maximum product

        // If the largest element is zero and k is odd, return 0 as product
        if (arr[n - 1] == 0 && k % 2 != 0) {
            return 0;
        }

        // If the largest element is negative and k is odd, take the largest negative numbers
        if (arr[n - 1] < 0 && k % 2 != 0) {
            for (int i = n - 1; i >= 0 && k > 0; i--) {
                res *= arr[i]; // Multiply the result by the element
                k--; // Decrease the remaining number of elements to be considered
            }
            return res;
        }

        // Variables to track the left and right pointers for pairing elements
        int l = 0, r = n - 1;

        // If the largest element is positive and k is odd, take the largest positive number
        if (arr[n - 1] > 0 && k % 2 != 0) {
            res *= arr[n - 1]; // Multiply result with the largest positive element
            k--; // Decrease the count of remaining elements to consider
            r--; // Move right pointer left
        }

        // While there are still elements to process in pairs
        while (k > 0) {
            long maxi1 = arr[r] * arr[r - 1]; // Product of two largest remaining negative/positive numbers
            long maxi2 = arr[l] * arr[l + 1]; // Product of two smallest remaining positive/negative numbers
            res *= Math.max(maxi1, maxi2); // Multiply result with the larger product of the two options

            // Choose the larger product by adjusting the appropriate pointer
            if (maxi1 > maxi2) {
                r -= 2; // Move right pointer left for two elements
            } else {
                l += 2; // Move left pointer right for two elements
            }
            k -= 2; // Decrease the count of remaining elements to consider
        }
        return res; // Return the maximum product
    }
}
