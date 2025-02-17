//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        // Loop through each row of the pattern
        for (int i = 1; i <= n; i++) {
            // Print first and last row with all '*'
            if (i == 1 || i == n) {
                for (int j = 0; j < n; j++) {
                    System.out.print("* ");
                }
                System.out.println();
            } 
            // Print middle rows with '*' at the start and end, and spaces in between
            else {
                System.out.print("*"); // First '*'
                for (int j = 0; j < 2 * n - 3; j++) {
                    System.out.print(" ");
                }
                System.out.print("*"); // Last '*'
                System.out.println();
            }
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends