//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.math.*;
import java.io.*;

class GFG {
  public static void main(String[] args) throws IOException {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();
    while (T-- > 0) {
      int n = sc.nextInt();
      int k = sc.nextInt();
      int a[] = new int[n];
      for(int i=0;i<n;i++){
        a[i]=sc.nextInt();
      }
     
      Solution obj = new Solution();
      boolean ans = obj.checkSubsequenceSum(n,a,k);
      System.out.println(ans?"Yes":"No");
    
System.out.println("~");
}
  }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Checks if there exists a subsequence with sum equal to K.
     * @param N - Size of the array
     * @param arr - Input array
     * @param K - Target sum
     * @return true if there exists a subsequence with sum K, otherwise false
     */
    public static boolean checkSubsequenceSum(int N, int[] arr, int K) {
        return findSubsequence(arr, N - 1, K);
    }

    /**
     * Recursive function to check if a subsequence sum equals the target.
     * @param arr - Input array
     * @param index - Current index being considered
     * @param target - Remaining sum needed
     * @return true if a valid subsequence is found, otherwise false
     */
    private static boolean findSubsequence(int[] arr, int index, int target) {
        // Base case: If target becomes 0, a valid subsequence is found
        if (target == 0) {
            return true;
        }

        // If we've reached the first element, check if it matches the target
        if (index == 0) {
            return arr[0] == target;
        }

        // Option 1: Include the current element if it does not exceed the target
        boolean include = false;
        if (arr[index] <= target) {
            include = findSubsequence(arr, index - 1, target - arr[index]);
            if (include) {
                return true; // Early return if a valid subsequence is found
            }
        }

        // Option 2: Exclude the current element and check further
        boolean exclude = findSubsequence(arr, index - 1, target);

        return exclude;
    }
}
