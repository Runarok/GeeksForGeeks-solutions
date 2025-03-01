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
            String S[] = read.readLine().split(" ");
            
            long a = Long.parseLong(S[0]);
            long b = Long.parseLong(S[1]);
            long c = Long.parseLong(S[2]);

            Solution ob = new Solution();
            System.out.println(ob.rightAngTri(a,b,c));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if the given sides form a right-angled triangle
    static String rightAngTri(long a, long b, long c) {
        // Square of side 'a', 'b', and 'c'
        long l = a * a;
        long m = b * b;
        long n = c * c;

        // Check if the sum of squares of two sides equals the square of the third side
        if (l + m == n || l + n == m || m + n == l)
            return "Yes";  // It forms a right-angled triangle
        else
            return "No";   // It does not form a right-angled triangle
    }
}
