//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(); // Read input value
        
        // Apply conditional checks based on the given rules
        if (a > 100) {
            System.out.println("Big");
        } else if (a < 10) {
            System.out.println("Small");
        } else {
            System.out.println("Number");
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends