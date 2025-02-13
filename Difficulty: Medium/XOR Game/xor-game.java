//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            int k = Integer.parseInt(in.readLine());

            Solution ob = new Solution();
            System.out.println(ob.xorCal(k));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int xorCal(int k) {
        // Code here to calculate the XOR value for the given integer k
        // If k is 1, return 2
        return k == 1 ? 2 : ((k & (k + 1)) != 0 ? -1 : k >> 1);
    }
}
