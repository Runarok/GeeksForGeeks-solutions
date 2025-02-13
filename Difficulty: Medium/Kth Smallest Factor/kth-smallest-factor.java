//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");

            int N = Integer.parseInt(S[0]);
            int K = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.kThSmallestFactor(N, K));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int kThSmallestFactor(int n, int k) {
        // Iterate through all numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            // Check if i is a factor of n
            if (n % i == 0) {
                k--; // Decrement k when a factor is found
            } 
            // If k reaches 0, return the current factor as the k-th smallest
            if (k == 0) {
                return i;
            }
        }
        // If k-th factor does not exist, return -1
        return -1;
    }
};
