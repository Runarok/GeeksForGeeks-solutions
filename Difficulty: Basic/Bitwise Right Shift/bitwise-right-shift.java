//{ Driver Code Starts

// } Driver Code Ends

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the console
        Scanner scanner = new Scanner(System.in);

        // Read two integer values from the user
        int number = scanner.nextInt();
        int shiftAmount = scanner.nextInt();

        // Perform right shift operation and print the result
        System.out.println(number >> shiftAmount);

        // Close the scanner to prevent resource leaks
        scanner.close();
    }
}


//{ Driver Code Starts.
// } Driver Code Ends