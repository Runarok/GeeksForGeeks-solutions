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
            int N = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.getCount(N));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to get the count of ways N can be expressed as the sum of consecutive integers
    static int getCount(int N) {
        int count = 0;      // To store the number of valid sequences
        int tempSum = 0;    // To keep track of the sum of consecutive numbers
        int j = 1;          // To maintain the current sequence's starting point
        
        // Iterate over all numbers from 1 to N
        for (int i = 1; i <= N; i++) {
            // If tempSum matches N, we have found a valid sequence
            if (tempSum == N) {
                count++;
            }
            tempSum += i;  // Add the current number to the running sum
            
            // If the sequence has exceeded half of N, break early as further additions will exceed N
            if (j > (N / 2)) {
                break;
            }
            
            // If the sum exceeds N, reduce the sequence's starting point by incrementing j
            while (tempSum > N && i > j) {
                tempSum -= j;
                j++;
            }
        }
        
        return count;  // Return the total count of valid sequences
    }
};
