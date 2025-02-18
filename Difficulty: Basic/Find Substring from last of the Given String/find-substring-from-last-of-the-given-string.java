//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            
            String input[] = read.readLine().split(" ");
            String x = input[0];
            String y = input[1];
            Solution ob = new Solution();
            System.out.println(ob.search(x, y));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    int search(String X, String Y) {
        // Check if Y exists in X using the lastIndexOf method
        int index = X.lastIndexOf(Y);
        
        // If Y is found, return its position (1-based index)
        if (index != -1) {
            return index + 1;
        }
        
        // If Y is not found, return -1
        return -1;
    }
}
