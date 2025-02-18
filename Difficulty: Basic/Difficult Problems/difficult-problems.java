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
            String N = read.readLine().trim();

            Solution ob = new Solution();
            System.out.println(ob.difProblem(N));
        }
    }
}
// } Driver Code Ends

class Solution {
    int difProblem(String N) {
        // Flags to check if the string is non-decreasing or non-increasing
        boolean isNonDecreasing = true;
        boolean isNonIncreasing = true;

        // Iterate through the string to check if it is non-decreasing or non-increasing
        for (int i = 1; i < N.length(); i++) {
            if (N.charAt(i) < N.charAt(i - 1)) {
                isNonDecreasing = false; // Found a decrease, so it’s not non-decreasing
            }
            if (N.charAt(i) > N.charAt(i - 1)) {
                isNonIncreasing = false; // Found an increase, so it’s not non-increasing
            }
        }

        // Return 1 if the string is either non-decreasing or non-increasing, otherwise return 0
        return (isNonDecreasing || isNonIncreasing) ? 1 : 0;
    }
}
