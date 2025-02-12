//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String s = br.readLine().trim();
            int k = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.characterReplacement(s, k);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to check if it's possible to replace characters within the given limit k
    public boolean check(int visited[], int k) {
        int max = -999;  // Initialize max value to a very small number
        int total = 0;   // Total number of characters encountered
        
        // Calculate the total characters and find the maximum frequency of a character
        for (int i = 0; i < 26; i++) {
            total += visited[i];
            if (max < visited[i]) {
                max = visited[i];
            }
        }
        
        // If the total number of characters minus the max frequency is less than or equal to k, return true
        return total - max <= k;
    }

    // Function to find the longest substring where at most k characters can be replaced
    public int characterReplacement(String s, int k) {
        int visited[] = new int[26];  // Array to keep track of character frequencies
        int res = 0;                   // Variable to store the result (max length of substring)
        int j = 0;                     // Pointer for the left side of the window
        
        // Iterate through each character in the string
        for (int i = 0; i < s.length(); i++) {
            visited[s.charAt(i) - 'A']++;  // Increment the frequency of the current character

            // If the substring satisfies the condition, update the result
            if (check(visited, k)) {
                res = Math.max(res, i - j + 1);  // Update the result with the current window size
            } else {
                // If the condition is not satisfied, shrink the window from the left
                while (j < s.length() && !check(visited, k)) { 
                    visited[s.charAt(j) - 'A']--;  // Decrease the frequency of the leftmost character
                    j++;  // Move the left pointer forward
                }
            }
        }
        
        return res;  // Return the longest valid substring length
    }
}
