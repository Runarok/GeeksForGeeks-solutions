//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            String A = S[0];
            String B = S[1];

            Solution ob = new Solution();
            System.out.println(ob.karatsubaAlgo(A,B));
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    // Function to multiply two binary numbers using Karatsuba-like logic (direct conversion in this case)
    static Long karatsubaAlgo(String A, String B) {
        // Convert both binary strings to decimal (base 10)
        long num1 = Long.parseLong(A, 2);
        long num2 = Long.parseLong(B, 2);

        // Return the product of the two numbers
        return num1 * num2;
    }
}