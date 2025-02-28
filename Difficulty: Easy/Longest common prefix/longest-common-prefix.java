//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GfG {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            String s1 = sc.next();
            String s2 = sc.next();
            Solution obj = new Solution();
            int ans = obj.longestCommonPrefix(s1, s2);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Helper function to find the length of the common prefix between two strings.
    public static int commonPrefix(String s1, String s2) {
        int res = 0;
        for (int i = 0; i < s2.length(); i++) {
            // Compare characters at the same position in both strings.
            if (s1.charAt(i) != s2.charAt(i)) {
                return res;  // Stop when characters don't match.
            }
            res = i;  // Update result to current matched index.
        }
        return res;  // Return the length of the matched prefix.
    }
    
    // Function to find the length of the longest common prefix between s1 and any suffix of s2.
    public int longestCommonPrefix(String s1, String s2) {
        int maxLength = 0;  // Initialize the maximum prefix length found so far.
        
        // Iterate over all possible starting points of suffixes in s2.
        for (int i = 0; i < s2.length(); i++) {
            // Get the current suffix of s2.
            String suffix = s2.substring(i, s2.length());
            
            // Find the common prefix length between s1 and this suffix.
            int len = commonPrefix(s1, suffix);
            
            // Update the maximum length if a longer common prefix is found.
            if (len > maxLength) {
                maxLength = len;
            }
        }
        
        return maxLength;  // Return the longest common prefix length found.
    }
}
