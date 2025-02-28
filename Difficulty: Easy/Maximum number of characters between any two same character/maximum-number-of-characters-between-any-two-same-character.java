//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String s = sc.next();
                    Solution obj = new Solution();
                    System.out.println(obj.maxChars(s));
                }
                
        }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    public int maxChars(String s) {
        // Map to store the first occurrence index of each character
        Map<Character, Integer> map = new HashMap<>();
        
        // Variable to track the maximum distance between same characters
        int maxVal = -1;
        char[] c = s.toCharArray();
        
        // Traverse the string character by character
        for (int i = 0; i < c.length; i++) {
            if (!map.containsKey(c[i])) {
                // Store the first occurrence index of the character
                map.put(c[i], i);
            } else {
                // Calculate the distance between this occurrence and the first occurrence
                maxVal = Math.max(maxVal, i - map.get(c[i]) - 1);
            }
        }
        
        // Return the maximum distance found
        return maxVal;
    }
}
