//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Create a scanner object to read input from the user
        Scanner s = new Scanner(System.in);
        
        // Read the integer n from user input
        int n = s.nextInt();
        
        // Check if the number is divisible by both 3 and 5, and print "FizzBuzz"
        if ((n % 3 == 0) && (n % 5 == 0)) {
            System.out.println("FizzBuzz");
        }
        // If the number is divisible by only 5, print "Buzz"
        else if (n % 5 == 0) {
            System.out.println("Buzz");
        }
        // If the number is divisible by only 3, print "Fizz"
        else if (n % 3 == 0) {
            System.out.println("Fizz");
        }
        // If the number is neither divisible by 3 nor 5, print the number itself
        else {
            System.out.println(n);
        }
    }
}



//{ Driver Code Starts.
// } Driver Code Ends