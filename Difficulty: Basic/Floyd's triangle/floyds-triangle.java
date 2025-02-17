//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int N = sc.nextInt();

            Solution ob = new Solution();
            ob.printFloydTriangle(N);
        }
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to print the Floyd's triangle.
     * @param {number} n - The number of rows in the Floyd's triangle.
     */
    static void printFloydTriangle(int n) {
        int x = 1; // Variable to keep track of the current number to print
        
        // Outer loop for each row
        for (int i = 0; i < n; i++) {
            // Inner loop to print numbers in each row
            for (int j = 0; j <= i; j++) {
                System.out.print(x + " "); // Print the current number
                x = x + 1; // Increment the number to print the next one
            }
            System.out.println(); // Move to the next line after completing one row
        }
    }
}
