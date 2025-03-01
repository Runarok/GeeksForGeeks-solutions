//{ Driver Code Starts
// Initial Template for java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            int A[] = new int[N];
            String[] S = read.readLine().split(" ");
            for (int i = 0; i < N; i++) A[i] = Integer.parseInt(S[i]);
            Solution ob = new Solution();
            System.out.println(ob.arrayGame(N, A));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function template for Java

class Solution {
    String arrayGame(int N, int A[]) {
        // Variable to store the difference in total sums
        int diff = 0;
        
        // Variable to store the maximum element in the array
        int max = 0;

        // Find the maximum value in the array
        for (int i = 0; i < A.length; i++) {
            if (A[i] > max) {
                max = A[i];
            }
        }
        
        // Calculate the total difference between the max value and each element
        for (int i = 0; i < A.length; i++) {
            diff += (max - A[i]);
        }
        
        // If the difference is zero, it's a draw
        if (diff == 0) {
            return "Draw";
        }
        // If the difference is even, the second player wins
        else if (diff % 2 == 0) {
            return "Second";
        }
        // If the difference is odd, the first player wins
        else {
            return "First";
        }
    }
}
