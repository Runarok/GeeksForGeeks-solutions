//{ Driver Code Starts

// } Driver Code Ends

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the console
        Scanner scanner = new Scanner(System.in);

        // Read two lines of input as strings
        String firstString = scanner.nextLine();
        String secondString = scanner.nextLine();

        // Print the strings in the required format
        System.out.println(firstString + secondString);

        // Close the scanner to prevent resource leaks
        scanner.close();
    }
}


//{ Driver Code Starts.
// } Driver Code Ends