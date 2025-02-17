//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Initialize scanner for input
        Scanner sc = new Scanner(System.in);
        
        // Read the integer input n
        int n = sc.nextInt();
        
        // Handle base cases
        if (n == 0){
            System.out.println(0);
        }
        else if (n == 1){
            System.out.println(1);
        } else if (n == 2) {
            System.out.println(1);
        } else {
            // Variables to hold the previous two Fibonacci numbers
            int a = 1;
            int b = 1;
            int c = 0;
            
            // Loop to calculate Fibonacci number for n > 2
            for (int i = 3; i <= n; i++){
                c = a + b; // Fibonacci relation
                a = b; // Shift values for next iteration
                b = c;
            }
            
            // Output the nth Fibonacci number
            System.out.println(c);
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends