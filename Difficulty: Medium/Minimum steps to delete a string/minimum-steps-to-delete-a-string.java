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
                    Solution ob = new Solution();
                    System.out.println(ob.minStepToDeleteString(s));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

class Solution {
    /**
     * Recursive function to find the minimum steps to delete the string
     * @param s - The input string
     * @param si - Start index
     * @param ei - End index
     * @param dp - Memoization table
     * @return Minimum steps to delete substring s[si..ei]
     */
    int solve(String s, int si, int ei, Integer[][] dp) {
        // Base cases
        if (si > ei) return 0; // Empty substring requires 0 steps
        if (si == ei) return 1; // Single character requires 1 step
        if (dp[si][ei] != null) return dp[si][ei]; // Return memoized result

        // Case 1: Remove s[si] and process the rest
        int removeFirst = 1 + solve(s, si + 1, ei, dp);

        // Case 2: Remove two consecutive identical characters if possible
        int removePair = Integer.MAX_VALUE;
        if (s.charAt(si) == s.charAt(si + 1)) {
            removePair = 1 + solve(s, si + 2, ei, dp);
        }

        // Case 3: Try removing a matching character later in the string
        int removeMatching = Integer.MAX_VALUE;
        for (int i = si + 2; i <= ei; i++) {
            if (s.charAt(si) == s.charAt(i)) {
                removeMatching = Math.min(removeMatching, solve(s, si + 1, i - 1, dp) + solve(s, i + 1, ei, dp));
            }
        }

        // Store and return the minimum of the three cases
        return dp[si][ei] = Math.min(removeFirst, Math.min(removePair, removeMatching));
    }

    /**
     * Function to find the minimum steps to delete the entire string
     * @param s - Input string
     * @return Minimum steps to delete the whole string
     */
    public int minStepToDeleteString(String s) {
        int n = s.length();
        Integer[][] dp = new Integer[n][n]; // Memoization table
        return solve(s, 0, n - 1, dp);
    }
}
