//{ Driver Code Starts

// } Driver Code Ends

// Back-end complete function Template for Java

import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        // Read the input number
        int n = sc.nextInt();
        
        // Extract the last digit of the number
        int lastDigit = n % 10;
        
        // Get the absolute value of the last digit to handle negative numbers
        int absoluteLastDigit = (lastDigit < 0) ? -lastDigit : lastDigit;
        
        // Print the absolute value of the last digit
        System.out.println(absoluteLastDigit);
    }
}


//{ Driver Code Starts.
// } Driver Code Ends