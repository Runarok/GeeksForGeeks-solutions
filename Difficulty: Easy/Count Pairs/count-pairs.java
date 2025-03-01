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
            
            int A = Integer.parseInt(S[0]);
            int B = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.countPairs(A,B));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to count the number of pairs (i, b) such that i^3 + b^3 = B
    static int countPairs(int A, int B) {
        int count = 0;
        // Iterate through all possible values of i
        for (int i = 0; i <= A; i++) {
            int b = A - i;
            // Check if the sum of cubes of i and b equals B
            if (i * i * i + b * b * b == B) {
                count++;
            }
        }
        return count;
    }
}
