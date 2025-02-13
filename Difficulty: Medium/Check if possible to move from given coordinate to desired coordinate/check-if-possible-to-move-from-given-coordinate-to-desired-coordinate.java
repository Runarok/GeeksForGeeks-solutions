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
            
            int x = Integer.parseInt(S[0]);
            int y = Integer.parseInt(S[1]);
            int a = Integer.parseInt(S[2]);
            int b = Integer.parseInt(S[3]);
            
            Solution ob = new Solution();
            System.out.println(ob.isPossible(x,y,a,b));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static int isPossible(int x, int y, int a, int b) {
        // Check if the GCD of (x, y) matches the GCD of (a, b)
        if (gcd(Math.abs(x), Math.abs(y)) == gcd(Math.abs(a), Math.abs(b))) {
            return 1;
        }
        return 0;
    }

    // Function to compute GCD using the Euclidean algorithm
    static int gcd(int a, int b) {
        if (a == b) {
            return a;
        }
        if (a > b) {
            return gcd(a - b, b);
        } else {
            return gcd(a, b - a);
        }
    }
}
