//{ Driver Code Starts
// Initial Template for Java

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {
        // Initialize BufferedReader for efficient input reading
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Read the number of test cases
        String str = br.readLine();
        int t = Integer.parseInt(str.trim());

        // Process each test case
        while (t-- > 0) {
            // Read the next line containing the array elements
            str = br.readLine();
            String[] tokens = str.trim().split("\\s+");

            // Convert the input strings to integers and store in an array
            ArrayList<Integer> list = new ArrayList<>();
            for (String token : tokens) {
                if (!token.isEmpty()) { // Ensure that the token is not empty
                    list.add(Integer.parseInt(token));
                }
            }

            // Convert ArrayList to int[] for processing
            int[] arr = list.stream().mapToInt(Integer::intValue).toArray();

            // Create an instance of Solution and compute the minimum energy
            Solution ob = new Solution();
            int result = ob.minCost(arr);

            // Output the result followed by a tilde as per the original C++ code
            System.out.println(result);
            System.out.println("~");
        }
    }
}


// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Helper method using recursion with memoization
    int memo(int[] dp, int[] heights, int n) {
        if (n == 0) return 0; // Base case: no cost to reach the first step
        if (dp[n] != -1) return dp[n]; // If already computed, return cached value
        
        int far = Integer.MAX_VALUE; // Placeholder for cost from two steps before
        int near = memo(dp, heights, n - 1) + Math.abs(heights[n] - heights[n - 1]); // Cost from the previous step
        
        // If two steps before exists, compute the cost from there
        if (n - 2 >= 0) {
            far = memo(dp, heights, n - 2) + Math.abs(heights[n] - heights[n - 2]);
        }
        
        // Cache the result for this step, choosing the minimum of near and far costs
        dp[n] = Math.min(near, far);
        
        return dp[n]; // Return the computed minimum cost
    }
    
    // Main function to compute the minimum cost
    int minCost(int[] height) {
        int n = height.length;
        int[] dp = new int[n];
        
        // Initialize dp array with -1 (representing uncomputed states)
        for (int i = 0; i < n; i++) dp[i] = -1;
        
        // Dynamic programming approach to solve the problem iteratively
        dp[0] = 0; // No cost to be at the first step
        
        for (int i = 1; i < n; i++) {
            int far = Integer.MAX_VALUE; // Placeholder for the cost from two steps before
            int near = dp[i - 1] + Math.abs(height[i] - height[i - 1]); // Cost from the previous step
            
            // If two steps before exists, compute the cost from there
            if (i - 2 >= 0) {
                far = dp[i - 2] + Math.abs(height[i] - height[i - 2]);
            }
            
            // Choose the minimum cost for the current step
            dp[i] = Math.min(near, far);
        }
        
        // Return the minimum cost to reach the last step
        return dp[n - 1];
    }
}


//{ Driver Code Starts.

// } Driver Code Ends