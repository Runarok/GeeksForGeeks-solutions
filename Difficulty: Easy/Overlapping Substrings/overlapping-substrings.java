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
            String S = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.overlapPresent(S));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    static String overlapPresent(String S) {
        // Check if "XY" appears before "YX"
        int f = S.indexOf("XY");
        int g = S.lastIndexOf("YX");

        // If both "XY" and "YX" are found, and "XY" is before "YX", return "YES"
        if (f != -1 && g != -1 && f + 1 < g) {
            return "YES";
        }

        // Check for the same overlap condition but ignoring the first character
        String s = S.substring(1, S.length());
        int m = s.indexOf("YX");
        int n = s.lastIndexOf("XY");

        // If "YX" appears before "XY" in the modified string, return "YES"
        if (m != -1 && n != -1 && m + 1 < n) {
            return "YES";
        }

        // If no valid overlap found, return "NO"
        return "NO";
    }
}
