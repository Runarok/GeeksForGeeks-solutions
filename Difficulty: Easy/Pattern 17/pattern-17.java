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
        // Outer loop to handle the number of rows
        for (int i = 0; i < n; i++) {

            // Inner loop to print leading spaces
            for (int j = 0; j < n - i - 1; j++) {
                System.out.print(" ");
            }

            // Character to start with
            char ch = 'A';

            // Finding the middle position of the current row
            int breakpoint = (2 * i + 1) / 2;

            // Loop to print characters in the current row
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print(ch);

                // Increment character before midpoint, decrement after midpoint
                if (j < breakpoint) {
                    ch++;
                } else {
                    ch--;
                }
            }

            // Move to the next line after each row
            System.out.println();
        }
    }
}
