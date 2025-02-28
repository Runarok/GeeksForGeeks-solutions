//{ Driver Code Starts

// } Driver Code Ends

// Back-end complete function Template for Java

import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Initialize scanner to take input
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();  // Read input integer

        // If n is positive, print "Geeksforgeeks" n times
        if (n > 0) {
            do {
                System.out.println("Geeksforgeeks");
                n = n - 1;  // Decrease n after each print
            } while (n > 0);  // Continue until n becomes 0
        }
        // If n is negative, print "Geeksforgeeks" |n| times
        else {
            do {
                System.out.println("Geeksforgeeks");
                n = n + 1;  // Increase n after each print
            } while (n < 0);  // Continue until n becomes 0
        }
    }
}


//{ Driver Code Starts.
// } Driver Code Ends