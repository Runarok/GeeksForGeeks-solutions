//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim()); // Read number of test cases

        while (t-- > 0) {
            String line = read.readLine().trim(); // Read the array input
            String[] numsStr = line.split(" ");   // Split the input string by spaces
            int[] nums =
                new int[numsStr.length]; // Convert string array to integer array
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            Solution ob = new Solution();
            int ans = ob.totHammingDist(nums); // Call the function and store result
            System.out.println(ans);           // Output the result
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    int totHammingDist(int arr[]) {
        int n = arr.length; // Length of the input array
        int totalHammingDistance = 0; // Stores the total Hamming distance
        int countZero = 0; // Count of numbers with 0 at the current bit position
        int countOne = 0;  // Count of numbers with 1 at the current bit position

        // Iterate through all 32 bits of an integer
        for (int bitPosition = 0; bitPosition < 32; bitPosition++) {
            countOne = 0;
            countZero = 0;

            // Count occurrences of 0s and 1s at the current bit position
            for (int j = 0; j < n; j++) {
                if (((arr[j] >> bitPosition) & 1) > 0) {
                    countOne++; // Bit is set (1)
                } else {
                    countZero++; // Bit is unset (0)
                }
            }

            // Each pair (one from countOne and one from countZero) contributes to Hamming distance
            totalHammingDistance += countOne * countZero;
        }

        return totalHammingDistance; // Return the total Hamming distance
    }
}
