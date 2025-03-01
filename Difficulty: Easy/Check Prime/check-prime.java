//{ Driver Code Starts

// } Driver Code Ends

import java.util.*;

public class Main {
    public static void main(String args[]) {
        // Create a scanner object to read input
        Scanner sc = new Scanner(System.in);
        
        // Read the integer value n
        int n = sc.nextInt();
        
        // Initialize a boolean variable to track if n is prime
        boolean isPrime = true;
        
        // Special case for n = 1, which is not prime
        if (n == 1) {
            isPrime = false;
        }
        // Special cases for n = 2 and n = 3, which are prime
        else if (n == 2 || n == 3) {
            isPrime = true;
        }
        // Check if n is divisible by 2 or 3, in which case it's not prime
        else if (n % 2 == 0 || n % 3 == 0) {
            isPrime = false;
        } else {
            // Check for divisibility starting from 5, incrementing by 6 (to check i and i+2)
            for (int i = 5; i * i <= n; i = i + 6) {
                // If n is divisible by i or i + 2, it's not prime
                if (n % i == 0 || n % (i + 2) == 0) {
                    isPrime = false;
                }
            }
        }
        
        // Output "True" if n is prime, otherwise output "False"
        if (isPrime) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
    }
}



//{ Driver Code Starts.
// } Driver Code Ends