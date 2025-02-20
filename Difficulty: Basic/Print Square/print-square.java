//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void square(int size) {
    // Loop through each row
    for (int row = 1; row <= size; row++) {
       
        // Loop through each column
        for (int col = 1; col <= size; col++) {
          
            // Print '*' for the border, space for inner part
            if (row == 1 || col == 1 || row == size || col == size) {
                System.out.print("* ");
            } else {
                System.out.print("  ");
            }
        }
        
        // Move to the next line after each row
        System.out.println(); 
    }
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int s = scn.nextInt();
            square(s);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends