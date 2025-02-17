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
            String St[] = read.readLine().split(" ");
            int F = Integer.parseInt(St[0]);
            int S = Integer.parseInt(St[1]);

            Solution ob = new Solution();
            System.out.println(ob.negaBit(F,S));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to return the result of XOR between F and S
    static int negaBit(int F, int S) {
        // Perform bitwise XOR operation and return the result
        return S ^ F;
    }
}
