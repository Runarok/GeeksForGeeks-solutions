//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {

            String[] inputLine = br.readLine().trim().split(" ");
            int n = inputLine.length;
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            int k = Integer.parseInt(br.readLine().trim());
            int ans = new Solution().maximiseSubset(arr, k);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to maximize the subset after performing k operations
    int maximiseSubset(int[] arr, int k) {
        int temp = k; // Temporary variable to store the remaining operations
        int n = arr.length; // Length of the array
        int i = 0, j = 1; // Initializing pointers for the window
        int maxi = 1, res = 1; // maxi to store the current maximum subset size, res to store the result

        // Loop through the array using two pointers, i and j
        while (j < n) {
            // Check if the current difference between elements (arr[j] - arr[j-1]) can be covered by the remaining operations
            if (arr[j] - arr[j - 1] - 1 <= temp) {
                maxi += (arr[j] - arr[j - 1]); // Update the subset size
                temp -= (arr[j] - arr[j - 1] - 1); // Decrease the remaining operations
                j++; // Move the end pointer forward
            } else {
                // Update the result with the current maxi + remaining operations
                res = Math.max(res, maxi + temp);
                // Move the start pointer forward, updating temp and maxi
                temp += arr[i + 1] - arr[i] - 1;
                maxi -= (arr[i + 1] - arr[i]); 
                i++; // Increment the start pointer
            }
        }

        // Add any remaining operations to the subset size
        maxi += temp;
        // Final result is the maximum subset size
        res = Math.max(res, maxi);
        return res; // Return the result
    }
}
