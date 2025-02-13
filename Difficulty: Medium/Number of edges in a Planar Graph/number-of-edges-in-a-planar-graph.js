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
            String C = S[0];
            String F = S[1];

            Solution ob = new Solution();
            System.out.println(ob.findNoOfEdges(C,F));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function template for Java
class Solution {
    static int findNoOfEdges(String C, String F) {
        // Extract the last digit of both strings as integers
        int lastDigitC = C.charAt(C.length() - 1) - '0';
        int lastDigitF = F.charAt(F.length() - 1) - '0';

        // Compute the sum of last digits modulo 10
        int edgeCount = (lastDigitC + lastDigitF) % 10;

        // Ensure edgeCount is at least 2
        if (edgeCount < 2) {
            edgeCount += 10;
        }
        
        // Adjust final result
        return edgeCount - 2;
    }
}
