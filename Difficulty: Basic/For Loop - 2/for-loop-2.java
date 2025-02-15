//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);
        
        // Read the input string
        String inputString = scanner.nextLine();
        
        // Iterate through the string, printing every alternate character
        for (int index = 0; index <= inputString.length(); index += 2) {
            System.out.print(inputString.charAt(index));
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends