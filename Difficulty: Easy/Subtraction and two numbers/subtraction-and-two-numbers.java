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
            String S[]=read.readLine().split(" ");
            int A=Integer.parseInt(S[0]);
            int B=Integer.parseInt(S[1]);
            Solution ob = new Solution();
            System.out.println(ob.repeatedSubtraction(A,B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to perform repeated subtraction of two numbers and return the count of subtractions
    int repeatedSubtraction(int A, int B) {
        // Variable to keep track of the number of subtractions
        int c = 0;

        // Continue the process as long as both A and B are greater than 0
        while (A > 0 && B > 0) {
            // If A is greater than B, subtract B from A and increment the count
            if (A > B) {
                A = A - B;
                c++;
            }
            // If B is greater than A, subtract A from B and increment the count
            else {
                B = B - A;
                c++;
            }
        }
        
        // Return the total number of subtractions performed
        return c;
    }
}
