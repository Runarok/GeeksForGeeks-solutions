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
            int n = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.saveKnights(n));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    static long saveKnights(int n) {
        // If the board size is 1x1, only 1 knight can be placed
        if (n == 1) {
            return 1;
        }
        
        // If the board size is 2x2, 4 knights can be placed (one in each square)
        if (n == 2) {
            return 4;
        }
        
        // For larger boards, the maximum number of knights is half the total squares (rounded up)
        long boardSize = (long) n;
        return (long) Math.ceil((boardSize * boardSize) / 2.0);
    }
}
