//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input[] = read.readLine().trim().split(" ");
            String s = input[0];
            int k = Integer.parseInt(input[1]);
            Solution ob = new Solution();
            System.out.println(ob.countOfSubstringWithKOnes(s, k));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    long countOfSubstringWithKOnes(String S, int K) {
        int n = S.length();
        int[] freq = new int[n + 1]; // Frequency array to store counts of ones encountered
        Arrays.fill(freq, 0);
        freq[0] = 1; // Initialize with 1 to handle cases where count matches K directly

        long result = 0; // Stores the final count of valid substrings
        int countOnes = 0; // Keeps track of the number of ones encountered so far

        // Traverse through the string
        for (int i = 0; i < n; i++) {
            countOnes += (S.charAt(i) - '0'); // Update count of ones

            // If we have seen at least K ones, check how many substrings satisfy the condition
            if (countOnes >= K) {
                result += (long) freq[countOnes - K];
            }

            // Increment the frequency of the current ones count
            freq[countOnes]++;
        }

        return result; // Return the total count of substrings with exactly K ones
    }
}
