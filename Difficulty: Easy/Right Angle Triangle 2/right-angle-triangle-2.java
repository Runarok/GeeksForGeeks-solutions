//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void triangle(int s) {
    // Loop through each row starting from the bottom
    for (int i = s - 1; i >= 0; i--) {
        // Loop through each column in the current row
        for (int j = 0; j < s - i; j++) {
            // Print '*' if it's on the boundary of the triangle (first column, last row, or diagonal)
            if (j == 0 || i == 0 || i + j == s - 1) {
                System.out.print("* ");
            } else {
                // Otherwise, print spaces to form the triangle shape
                System.out.print("  ");
            }
        }
        // Move to the next line after printing each row
        System.out.println();
    }
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int s = scn.nextInt();
            triangle(s);
        }
        scn.close();
    }
}
// } Driver Code Ends