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
            String B = read.readLine();
            String G = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.binToGrey(B));
            System.out.println(ob.greyToBin(G));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to convert Binary to Grey code
    static String binToGrey(String B) {
        String res = "";
        // First bit of Grey code is same as Binary code
        res += B.charAt(0);

        // Loop through the rest of the bits
        for(int i = 1; i < B.length(); i++) {
            // XOR of current bit and previous bit of binary code
            res += (B.charAt(i) ^ B.charAt(i-1));
        }
        return res;
    }

    // Function to convert Grey code to Binary
    static String greyToBin(String G) {
        String res = "";
        // First bit of Binary code is same as Grey code
        res += G.charAt(0);

        // Loop through the rest of the bits
        for(int i = 1; i < G.length(); i++) {
            // XOR of previous Binary bit and current Grey bit
            res += (res.charAt(i-1) ^ G.charAt(i));
        }
        return res;
    }
}
