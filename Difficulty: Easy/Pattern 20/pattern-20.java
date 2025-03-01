//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            Solution obj = new Solution();
            obj.printTriangle(n);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {

    void printTriangle(int n) {
        // code here
        // Printing the top half of the pattern
        for (int i = 1; i <= n; i++) {
            // Print stars for the left part of the triangle
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // Print spaces in the middle
            for (int k = n - 1; k >= i; k--) {
                System.out.print("  ");
            }
            // Print stars for the right part of the triangle
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // Move to the next line after each row
            System.out.println();
        }

        // Printing the bottom half of the pattern
        for (int i = 1; i < n; i++) {
            // Print stars for the left part of the inverted triangle
            for (int j = n; j > i; j--) {
                System.out.print("*");
            }
            // Print spaces in the middle
            for (int k = 1; k <= i; k++) {
                System.out.print("  ");
            }
            // Print stars for the right part of the inverted triangle
            for (int j = n; j > i; j--) {
                System.out.print("*");
            }
            // Move to the next line after each row
            System.out.println();
        }
    }
}
