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
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.rectanglesInChessBoard(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static Long rectanglesInChessBoard(Long n) {
        // Calculate the total number of rectangles in a chessboard of size n x n
        // The formula used here accounts for all possible rectangles by summing
        // different sized rectangles that can be formed in the chessboard.
        
        return (n * (n + 1) * n * (n + 1)) / 4 - (n * (n + 1) * (2 * n + 1)) / 6;
    }
}
