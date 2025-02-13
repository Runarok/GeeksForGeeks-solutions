//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.minimumItem(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    // Recursive function to find the minimum number of items required
    static int findMinItems(int remainingAmount, int[] denominations, int index) {
        if (remainingAmount == 0) {
            return 0; // Base case: no amount left to process
        }
        if (remainingAmount < 0) {
            return 99999; // Invalid case, return a large value to be ignored in min comparison
        }
        
        int minItems = 99999; // Initialize with a large value
        
        // Try each denomination starting from the given index
        for (int i = index; i < denominations.length; i++) {
            for (int itemCount = 1; itemCount <= remainingAmount / denominations[i]; itemCount++) {
                minItems = Math.min(minItems, (itemCount + itemCount / 2) + findMinItems(remainingAmount - itemCount * denominations[i], denominations, i + 1));
            }
        }
        return minItems;
    }

    // Function to calculate the minimum number of items needed to form the given amount
    static int minimumItem(int amount) {
        int[] denominations = {1000, 2000, 3000, 4000, 5000}; // Fixed denominations
        
        int result = findMinItems(amount, denominations, 0);
        
        return (result == 99999) ? -1 : result; // If no valid solution, return -1
    }
}
