//{ Driver Code Starts
import java.util.*;
import java.io.*;

public class GFG {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        while(t-- > 0)
        {
            int n = scanner.nextInt();
            int total = scanner.nextInt();
            int[] cost = new int[n];
            for (int i = 0; i < n; i++) {
                cost[i] = scanner.nextInt();
            }
            Solution solution = new Solution();
            int result = solution.max_courses(n, total, cost);
            System.out.println(result);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    
    // Function to find the maximum number of courses that can be taken
    public int max_courses(int n, int k, int[] arr) {
        
        // dp[k][i] will store the maximum number of courses that can be taken starting from course i with k capacity remaining
        int dp[][] = new int[k+1][arr.length+1];
        
        // Call the solve function to calculate the maximum courses
        return solve(arr, k, 0, dp);
    }

    // Recursive function to calculate the maximum courses that can be taken
    public static int solve(int[] arr, int k, int i, int dp[][]) {
        
        // If all courses are considered, return 0 as no more courses can be taken
        if (i == arr.length)
            return 0;
        
        // If this subproblem has been solved before, return the cached value
        if (dp[k][i] != 0)
            return dp[k][i];
        
        int a = 0, b = 0;

        // If the current course can be taken (k >= arr[i]), then calculate the maximum courses with this course taken
        if (k >= arr[i]) {
            a += 1 + solve(arr, (k - arr[i]) + (int)(Math.floor(0.9 * arr[i])), i + 1, dp);
        }

        // Consider skipping the current course
        b = solve(arr, k, i + 1, dp);
        
        // Store the result in dp[k][i] and return the maximum of the two choices
        return dp[k][i] = Math.max(a, b);
    }
}
