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
            String S = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.sevenSegments(S,N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to generate the number using seven-segment digits
    static String sevenSegments(String S, int N) {
        // Array representing the segment count for each digit from 0 to 9
        int[] a = {6, 2, 5, 5, 4, 5, 6, 3, 7, 5};
        
        int sum = 0; // Initialize the sum of segments used in the input string
        String ans = ""; // String to store the resulting number

        // Calculate the total sum of segments required for the input string S
        for (char c : S.toCharArray()) {
            sum = sum + a[c - '0']; // Add the segment count for each digit in the string
        }

        // Loop to construct the number with the available segments
        for (int i = 0; i < N; i++) {
            for (int digit = 0; digit <= 9; digit++) {
                int min = (N - i + 1) * 2; // Minimum segments required for the current digit
                int diff = sum - a[digit]; // Remaining segments after using the current digit's segments

                // Check if it's possible to form the current number with available segments
                if (diff >= 2 * (N - i - 1) && diff <= 7 * (N - i - 1)) {
                    sum = sum - a[digit]; // Deduct the segments used by the current digit
                    ans = ans + digit; // Add the digit to the result string
                    break; // Break after selecting a valid digit for the current position
                }
            }
        }

        // Return the final number as a string
        return ans;
    }
}
