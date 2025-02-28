//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void squareWall(int s) {
    // Iterate through each row of the square wall
    int i = 1;
    while (i <= s) {
        // For each row, iterate through each column
        int j = 1;
        while (j <= s) {
            // Print '*' with a space for each column
            System.out.print("* ");
            j++;
        }
        // Move to the next line after completing one row
        System.out.println();
        i++;
    }
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int s = scn.nextInt();
            squareWall(s);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends