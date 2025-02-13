//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());

        while (tc-- > 0) {

            String[] str = br.readLine().trim().split(" ");
            int[] a = new int[str.length];
            for (int i = 0; i < str.length; i++) {
                a[i] = Integer.parseInt(str[i]);
            }
            String[] nk = br.readLine().trim().split(" ");
            int k = Integer.parseInt(nk[0]);
            Solution sln = new Solution();
            int ans = sln.countPartitions(a, k);

            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends

class Solution {
    static int mod = (int)(1e9 + 7);
    
    // Function to count the number of partitions with a given difference
    int countPartitions(int[] arr, int d) {
        int n = arr.length;
        return count(n, d, arr);
    }
    
    // Function to count the number of ways to partition the array into two subsets
    // such that the difference between their sums is equal to 'd'
    int count(int n, int d, int arr[]) {
        int sum = 0;
        
        // Calculate the sum of all elements in the array
        for (int i : arr) sum += i;
        
        // If (sum - d) is negative or not even, it's not possible to partition
        if ((sum - d) < 0 || (sum - d) % 2 != 0) return 0;
        
        // Target sum for the subset (sum - d) / 2
        int target = (sum - d) / 2;
        
        // Initialize dp array where dp[i][j] means number of ways to get sum 'j' using first 'i' elements
        int dp[][] = new int[n + 1][target + 1];
        
        dp[0][0] = 1; // Base case: there is one way to form sum 0 (select no elements)
        
        // Fill dp table
        for (int i = 1; i <= n; i++) {
            for (int tar = 0; tar <= target; tar++) {
                int notTake = dp[i - 1][tar]; // Ways to form sum 'tar' without using the current element
                int take = 0;
                
                // If the current element can be included, add the ways to form sum (tar - arr[i-1])
                if (tar >= arr[i - 1]) {
                    take = dp[i - 1][tar - arr[i - 1]];
                }
                
                dp[i][tar] = (notTake + take) % mod; // Total ways for current sum 'tar'
            }
        }
        
        // The result is the number of ways to partition with the target sum
        return dp[n][target];
    }
}
