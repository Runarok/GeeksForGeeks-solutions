//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String S[] = read.readLine().split(" ");
            int A = Integer.parseInt(S[0]);
            int B = Integer.parseInt(S[1]);
            int N = Integer.parseInt(S[2]);
            Solution ob = new Solution();
            System.out.println(ob.isPossible(A,B,N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to check if it is possible to measure C using A and B
    static int isPossible(int A, int B, int C) {
        // Calculate the gcd of A and B
        int gcd = gcd(A, B);
        
        // If C is divisible by gcd of A and B, it's possible to measure C
        if (C % gcd != 0) {
            return 0;  // Return 0 if C is not divisible by gcd
        }
        return 1;  // Return 1 if C is divisible by gcd
    }

    // Helper function to calculate gcd using Euclidean algorithm
    static int gcd(int a, int b) {
        if (b == 0) {
            return a;  // Return a if b is 0
        }
        return gcd(b, a % b);  // Recursively calculate gcd
    }
}
