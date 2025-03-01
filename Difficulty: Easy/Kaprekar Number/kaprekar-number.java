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
            System.out.println(ob.isKaprekar(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    int isKaprekar(int N) {
        // Calculate the square of N
        int square = N * N;
        
        // Convert the square to a string to split into left and right parts
        String sqr = String.valueOf(square);
        int length = sqr.length();
        
        // Split the square into two parts
        String leftpart = sqr.substring(0, length / 2);
        String rightpart = sqr.substring(length / 2);
        
        // If the left part is empty, treat it as 0
        int left = leftpart.isEmpty() ? 0 : Integer.parseInt(leftpart);
        int right = Integer.parseInt(rightpart);
        
        // Check if the sum of the left and right parts equals N
        int sum = left + right;
        return sum == N ? 1 : 0;
    }
}
