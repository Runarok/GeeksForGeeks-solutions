//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        // Loop to iterate through rows
        for (int i = 1; i <= n; i++) {
            // Loop to iterate through columns in each row
            for (int j = 1; j <= i; j++) {
                // Conditions for printing '*'
                // 1. First column
                // 2. Last column of the current row
                // 3. Last row (bottom of triangle)
                if (i == n || j == 1 || i == j) {
                    System.out.print("* ");
                } 
                // Otherwise, print space to create the hollow effect
                else {
                    System.out.print("  ");
                }
            }
            // Move to the next line after each row
            System.out.println();
        }
    }
}



//{ Driver Code Starts.
// } Driver Code Ends