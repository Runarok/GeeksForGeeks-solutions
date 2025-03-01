//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            int ans[] = ob.nearestPerfectSquare(N);
            System.out.println(ans[0] + " " + ans[1]);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the nearest perfect square to N
    int[] nearestPerfectSquare(int N) {
        // Calculate the floor and ceiling of the square root of N
        int val = (int) Math.floor(Math.sqrt(N));
        int val2 = (int) Math.ceil(Math.sqrt(N));
        
        // If N is already a perfect square, return N with difference 0
        if (val * val == N) {
            return new int[]{N, 0};
        }
        
        // Compare the difference between N and the nearest perfect squares
        // If the floor value's perfect square is closer, return it
        if (N - val * val < val2 * val2 - N) {
            return new int[]{val * val, N - val * val};
        }
        
        // Otherwise, return the ceiling value's perfect square
        return new int[]{val2 * val2, val2 * val2 - N};
    }
}
