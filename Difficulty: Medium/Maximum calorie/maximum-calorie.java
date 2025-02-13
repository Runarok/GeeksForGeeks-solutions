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
                    int Arr[] = new int[n];
                    for(int i = 0;i<n;i++)
                        Arr[i] = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.maxCalories(Arr,n));
                }
        }
}    
// } Driver Code Ends

class Solution {
    public int maxCalories(int arr[], int n) {
        int[] dp = new int[n];

        // Base cases
        if (n >= 1) {
            dp[0] = arr[0]; // Only one element
        }
        if (n >= 2) {
            dp[1] = arr[0] + arr[1]; // Sum of first two elements
        }
        if (n > 2) {
            // Maximum sum considering first three elements
            dp[2] = Math.max(Math.max(dp[1], arr[1] + arr[2]), arr[0] + arr[2]);

            // Process remaining elements
            for (int i = 3; i < n; i++) {
                int takingPrevAndOther = dp[i - 1]; // Skip current element
                int takingCurrentAndPrev = arr[i] + arr[i - 1] + dp[i - 3]; // Take current and previous
                int takingCurrentAndOther = arr[i] + dp[i - 2]; // Take current and element before previous
                
                // Compute the maximum calories sum possible at index i
                dp[i] = Math.max(Math.max(takingPrevAndOther, takingCurrentAndPrev), takingCurrentAndOther);
            }
        }
        return dp[n - 1]; // Maximum sum found
    }
}
