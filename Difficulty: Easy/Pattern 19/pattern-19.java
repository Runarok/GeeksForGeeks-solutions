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
        // Outer loop for each row
        for (int row = 1; row <= 2 * n; row++) {
            
            // Determine the number of stars for the current row.
            int starCount = (row <= n) ? (n - row + 1) : (row - n);
            
            // Print stars on the left side.
            for (int col = 1; col <= starCount; col++) {
                System.out.print("*");
            }
            
            // Print spaces in the middle.
            int spaceCount = (n - starCount) * 2;
            for (int space = 1; space <= spaceCount; space++) {
                System.out.print(" ");
            }
            
            // Print stars on the right side.
            for (int col = 1; col <= starCount; col++) {
                System.out.print("*");
            }
            
            // Move to the next line after printing each row.
            System.out.println();
        }
    }
}
