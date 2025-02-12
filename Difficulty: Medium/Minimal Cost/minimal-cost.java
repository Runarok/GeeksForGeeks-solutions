//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to minimize the cost to reach the last element
    public int minimizeCost(int k, int arr[]) {
        // Initialize the dp array where dp[i] holds the minimum cost to reach index i
        int[] dp = new int[arr.length]; 
        dp[0] = 0; // The cost to reach the first element is 0

        // Loop through the array starting from the second element
        for (int i = 1; i < arr.length; i++) {
            int minSteps = Integer.MAX_VALUE; // Variable to track the minimum cost

            // Loop through to try all possible jumps from '1' to 'k'
            for (int j = 1; j <= k; j++) {
                // Ensure the jump doesn't go out of bounds
                if (i - j >= 0) {
                    // Calculate the cost of jumping from (i - j) to i
                    int jump = dp[i - j] + Math.abs(arr[i] - arr[i - j]);
                    // Update the minimum cost
                    minSteps = Math.min(jump, minSteps);
                }
            }
            // Store the minimum cost to reach index i
            dp[i] = minSteps;
        }

        // Return the minimum cost to reach the last element
        return dp[arr.length - 1];
    }
}


//{ Driver Code Starts.

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            int k = Integer.parseInt(br.readLine());
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;
            Solution obj = new Solution();
            int res = obj.minimizeCost(k, arr);

            System.out.println(res);

            System.out.println("~");
        }
    }
}
// } Driver Code Ends