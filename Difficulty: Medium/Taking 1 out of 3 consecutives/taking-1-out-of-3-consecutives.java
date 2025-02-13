//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends
// User function Template for Java

class Solution {

    public int minSum(int arr[]) {
        // Check if the input array is valid and has more than 2 elements
        if (arr == null || arr.length <= 2) {
            return 0; // If the array is invalid or has less than 3 elements, return 0
        }
        
        // Initialize dp array to store results for the last 3 elements
        int dp[] = new int[3], n = arr.length;
        
        // Base case: calculate the minimum sum from the last 3 elements
        dp[0] = Math.min(arr[n - 1], Math.min(arr[n - 2], arr[n - 3]));
        
        // Iterate through the array from the 4th last element to the start
        for (int i = n - 4; i >= 0; --i) {
            // Calculate the minimum sum considering the current element and the previous dp values
            int curr = Math.min(arr[i] + dp[0], Math.min(arr[i + 1] + dp[1], arr[i + 2] + dp[2]));
            
            // Update the dp array for the next iteration
            dp[2] = dp[1];
            dp[1] = dp[0];
            dp[0] = curr;
        }
        
        // Return the minimum sum from the first element of dp
        return dp[0];
    }
}


//{ Driver Code Starts.

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            // int k = Integer.parseInt(br.readLine());
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
            int ans = obj.minSum(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends