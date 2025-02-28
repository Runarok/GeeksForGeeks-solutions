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

            // Call the isBrightened function and print the result
            boolean ans = ob.isBrightened(nums, k);
            if (ans) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
        }
    }
}

// } Driver Code Ends

class Solution {
    public boolean isBrightened(int[] arr, int k) {
        // Initialize variables to track the last bulb position and consecutive zeros encountered
        int lastBulb = -1, consecutiveZeros = 0;
        int n = arr.length;

        // Iterate through the array to check the bulb conditions
        for (int i = 0; i < n; i++) {
            // When a bulb is on (1)
            if (arr[i] == 1) {
                consecutiveZeros = 0;  // Reset consecutive zeros counter

                // Check if there is enough space to brighten bulbs before the current one
                if (lastBulb + k < i - 1) {
                    return false;  // Return false if space between bulbs is insufficient
                }

                // Brighten bulbs after the current bulb (up to 'k' bulbs)
                while (i + 1 < n && arr[i + 1] == 0 && consecutiveZeros < k) {
                    i++;  // Move to the next bulb
                    consecutiveZeros++;  // Count consecutive zeros
                }

                lastBulb = i;  // Update last bulb position after brightening
            }
        }

        // Check if all bulbs are brightened by ensuring the last bulb is at or beyond the last index
        return lastBulb >= n - 1;
    }
}
