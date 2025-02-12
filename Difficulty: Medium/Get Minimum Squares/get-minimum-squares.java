//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.MinSquares(n);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the minimum number of squares that sum to n
    public int MinSquares(int n) {
        int min = 0;
        
        // Check if the number is already a perfect square
        if (isPerfectSquare(n)) return 1;

        // Divide by 4 until it is no longer divisible to check the 4k + 7 case
        while (n % 4 == 0) {
            n /= 4;
        }
        
        // If n is of the form 4k + 7, then the answer is 4
        if (n % 8 == 7) return 4;

        // Try all numbers i and check if (n - i^2) is a perfect square
        for (int i = 1; i * i <= n; i++) {
            if (isPerfectSquare(n - i * i)) return 2;
        }

        // If no solution is found, return 3
        return 3;
    }

    // Helper function to check if a number is a perfect square
    public static boolean isPerfectSquare(int n) {
        int sqrt = (int) Math.sqrt(n);
        return sqrt * sqrt == n;
    }
}
