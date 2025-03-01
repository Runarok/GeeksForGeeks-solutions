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
                    int n = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.minSteps(n));
                    
                }
        }
}    
// } Driver Code Ends

class Solution {

    // Function to find the minimum steps to reduce N to 1
    public int minSteps(int N) {
        // Array to store the minimum steps required for each number from 0 to N
        int dp[] = new int[N + 1];

        // Base cases
        if (N == 1) return 0;
        if (N == 2) return 1;
        if (N == 3) return 1;

        // Initialize dp array for known values
        dp[0] = 0;
        dp[1] = 0;
        dp[2] = 1;
        dp[3] = 1;

        // Iterate from 4 to N to calculate the minimum steps
        for (int i = 4; i <= N; i++) {
            // Initialize the possible answers by subtracting 1
            int ans1 = dp[i - 1] + 1;
            int ans2 = Integer.MAX_VALUE;
            int ans3 = Integer.MAX_VALUE;

            // Check if i is divisible by 2 and calculate the result for that case
            if (i % 2 == 0) {
                ans2 = Math.min(ans1, dp[i / 2] + 1);
            }

            // Check if i is divisible by 3 and calculate the result for that case
            if (i % 3 == 0) {
                ans3 = dp[i / 3] + 1;
            }

            // Take the minimum of all possible results
            dp[i] = Math.min(ans1, Math.min(ans2, ans3));
        }

        // Return the minimum steps to reduce N to 1
        return dp[N];
    }
}
