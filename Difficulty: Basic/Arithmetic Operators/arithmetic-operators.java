//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // Read two integer inputs
        int x = sc.nextInt();
        int y = sc.nextInt();

        // Perform arithmetic operations
        int sum = x + y;
        int difference = x - y;
        int product = x * y;
        int quotient = x / y;
        int remainder = x % y;

        // Print results in a single line
        System.out.print(sum + " " + difference + " " + product + " " + quotient + " " + remainder);
    }
}


//{ Driver Code Starts.
// } Driver Code Ends