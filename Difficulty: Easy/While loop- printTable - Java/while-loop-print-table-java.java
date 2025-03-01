//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        int i = 10; // Starting multiplier
        Scanner sc = new Scanner(System.in); // Scanner to take input
        int n = sc.nextInt(); // Reading the number to multiply
        
        // Loop to print the multiplication table of 'n' in reverse order
        while (i > 0) {
            System.out.print(n * i + " "); // Printing the result of multiplication
            i--; // Decreasing the multiplier
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends