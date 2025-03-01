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
            obj.printSquare(n);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {

    void printSquare(int n) {
        // Loop through each row (i) to create the square
        for (int i = 1; i <= n; i++) {
            // Loop through each column (j) to create the square
            for (int j = 1; j <= n; j++) {
                // Print '*' for the boundary of the square
                if (i == 1 || j == 1 || i == n || j == n) {
                    System.out.print("*");
                } 
                // Otherwise, print a space inside the square
                else {
                    System.out.print(" ");
                }
            }
            // Move to the next line after finishing a row
            System.out.println();
        }
    }
}
