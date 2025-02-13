//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim());

        while (t-- > 0) {
            String line1 = read.readLine().trim();
            String[] numsStr1 = line1.split(" ");
            int[] arr1 = new int[numsStr1.length];
            for (int i = 0; i < numsStr1.length; i++) {
                arr1[i] = Integer.parseInt(numsStr1[i]);
            }

            String line2 = read.readLine().trim();
            String[] numsStr2 = line2.split(" ");
            int[] arr2 = new int[numsStr2.length];
            for (int i = 0; i < numsStr2.length; i++) {
                arr2[i] = Integer.parseInt(numsStr2[i]);
            }

            Solution ob = new Solution();
            System.out.println(ob.LCIS(arr1, arr2));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    public int LCIS(int[] a, int[] b) {
        int n = a.length, m = b.length;
        
        // Array to store the longest common increasing subsequence (LCIS)
        // ending at each index of b
        int[] dp = new int[m];

        // Iterate through each element of array a
        for (int i = 0; i < n; i++) {
            int currentMax = 0; // To store the max value of dp[j] before b[j] < a[i]
            
            // Iterate through each element of array b
            for (int j = 0; j < m; j++) {
                
                // If element a[i] matches with b[j], update dp[j]
                if (a[i] == b[j]) {
                    dp[j] = Math.max(dp[j], currentMax + 1);
                }
                
                // If b[j] is smaller than a[i], update the currentMax
                if (b[j] < a[i]) {
                    currentMax = Math.max(currentMax, dp[j]);
                }
            }
        }
        
        // Find the maximum value in dp, which gives the length of LCIS
        int lcisLength = 0;
        for (int value : dp) {
            lcisLength = Math.max(lcisLength, value);
        }
        return lcisLength;
    }
}
