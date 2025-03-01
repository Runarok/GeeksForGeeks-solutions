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
            
            Long a = Long.parseLong(S[0]);
            Long b = Long.parseLong(S[1]);
            Long m = Long.parseLong(S[2]);
            Long n = Long.parseLong(S[3]);

            Solution ob = new Solution();
            System.out.println(ob.greaterPower(a,b,m,n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static int greaterPower(Long a, Long b, Long m, Long n) {
        // Handle edge cases where a or m are zero
        if (a == 0 && m == 0) return -1; // Both are 0^something, undefined
        if (a == 0) return 0; // 0 raised to any power is 0, so it's always smaller
        if (m == 0) return 1; // Non-zero raised to any power is always greater than 0

        // Compare using logarithms to avoid overflow
        double power1 = b * Math.log(a);
        double power2 = n * Math.log(m);

        // If the first power is greater, return 1, else return 0
        if (power1 > power2) {
            return 1;
        } else if (power2 > power1) {
            return 0;
        }
        return -1; // If both powers are equal, return -1
    }
}
