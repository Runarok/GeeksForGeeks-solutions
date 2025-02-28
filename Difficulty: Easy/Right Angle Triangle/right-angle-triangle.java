//{ Driver Code Starts

// } Driver Code Ends

// Back-end complete function Template for Java
import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Scanner object to read user input
        Scanner sc = new Scanner(System.in);
        
        // Read the value of n, the number of rows for the pattern
        int n = sc.nextInt();
        
        // Outer loop to handle the number of rows (i)
        int i = 1;
        while (i <= n) {
            // Inner loop to print the stars in each row (j)
            int j = 1;
            while (j <= i) {
                System.out.print("*" + " ");  // Print a star with space
                j++;  // Increment inner loop counter
            }
            i++;  // Increment outer loop counter to move to the next row
            System.out.println();  // Move to the next line after each row of stars
        }
    }
}



//{ Driver Code Starts.
// } Driver Code Ends