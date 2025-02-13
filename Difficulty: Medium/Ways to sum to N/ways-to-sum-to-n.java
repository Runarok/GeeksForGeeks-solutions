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
                    int m = sc.nextInt();
                    int N = sc.nextInt();
                    int Arr[] = new int[m];
                    for(int i = 0;i<m;i++)
                        Arr[i] = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.countWays(Arr,m,N));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

// User function Template for Java

class Solution {   
    // Modulo value to prevent overflow
    int MODULO = 1000000007;

    // Recursive function to count the number of ways to form the target sum
    public int allPaths(int n, int target, int[] arr, int[] dp) {
        // Base case: if target is 0, there is one valid way (choosing no elements)
        if (target == 0) 
            return 1;

        // If the result for the current target is already computed, return it
        if (dp[target] != -1) 
            return dp[target];

        int totalWays = 0;

        // Try picking each element and subtracting it from the target
        for (int i = 0; i < n; i++) {
            if (target >= arr[i]) {
                totalWays = (totalWays + allPaths(n, target - arr[i], arr, dp)) % MODULO;
            }
        }

        // Store the result in the dp array and return
        dp[target] = totalWays;
        return dp[target];
    }

    // Function to count the number of ways to reach the target sum
    public int countWays(int arr[], int n, int target) { 
        // Initialize the dp array with -1 to indicate uncomputed values
        int[] dp = new int[target + 1];
        Arrays.fill(dp, -1);

        // Start the recursive computation
        return allPaths(n, target, arr, dp);
    } 
}
