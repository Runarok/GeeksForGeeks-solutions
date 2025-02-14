//{ Driver Code Starts

// } Driver Code Ends


import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Create a scanner to take input for booleans a and b
        Scanner sc = new Scanner(System.in);
        boolean a = sc.nextBoolean(); // Read boolean a
        boolean b = sc.nextBoolean(); // Read boolean b
        
        // Perform AND operation (a && b), OR operation (a || b), and NOT operation (!a)
        // Print all results in a single line
        System.out.println((a && b) + " " + (a || b) + " " + (!a));
    }
}


//{ Driver Code Starts.
// } Driver Code Ends