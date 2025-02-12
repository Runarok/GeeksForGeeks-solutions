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
            String A[] = read.readLine().split(" ");
            
            String S = A[0];
            String T = A[1];

            Solution ob = new Solution();
            System.out.println(ob.shortestUnSub(S,T));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int dp[][];

    // Recursive function to find the shortest subsequence
    static int answer(String s, String t, int n, int m) {
        // Base case 1: If we've reached the end of string s
        if (n >= s.length()) {
            return 501; // Return a large number (infeasible)
        }

        // Base case 2: If we've reached the end of string t
        if (m >= t.length()) {
            return 1; // We found a valid subsequence
        }

        // If the value is already calculated, return it
        if (dp[n][m] != -1) {
            return dp[n][m];
        }

        int k = m;
        
        // Try to find the next matching character in t
        for (; k < t.length(); k++) {
            if (s.charAt(n) == t.charAt(k)) {
                break;
            }
        }

        // If no match is found, return a large number (infeasible)
        if (k == t.length()) {
            return 1;
        }

        // Calculate the minimum between two choices: 
        // 1. Skip the character in s and move to the next
        // 2. Use the character in s and move to the next matching character in t
        return dp[n][m] = Math.min(answer(s, t, n + 1, m), 1 + answer(s, t, n + 1, k + 1));
    }

    // Function to find the length of the shortest subsequence
    static int shortestUnSub(String S, String T) {
        // Get lengths of strings S and T
        int n = S.length();
        int m = T.length();

        // Initialize the dp array with -1 (indicating uncomputed states)
        dp = new int[n + 1][m + 1];
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= m; j++) {
                dp[i][j] = -1;
            }
        }

        // Call the helper function to compute the answer
        int result = answer(S, T, 0, 0);

        // If the result is too large, return -1 indicating no valid subsequence
        if (result >= 501) {
            return -1;
        }

        return result; // Return the shortest subsequence length
    }
}
