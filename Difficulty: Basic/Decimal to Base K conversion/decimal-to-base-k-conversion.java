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
            
            int N = Integer.parseInt(S[0]);
            int K = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.changeBase(N,K));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Helper function to convert a number to the specified base
    static String toBin(int n, int K) {
        StringBuilder s = new StringBuilder();
        // While n is greater than 0, append the remainder when divided by K to the result
        while (n > 0) {
            s.append(String.valueOf(n % K));
            n /= K;
        }
        // Reverse the string to get the correct base representation
        return s.reverse().toString();  
    }

    // Main function to convert the number N to the specified base K
    static Long changeBase(int N, int K) {
        // Return the number as a string parsed to a Long after converting to the base K
        return Long.parseLong(toBin(N, K));
    }
}
