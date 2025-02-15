//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void divisor(int number) {
    
    // Loop through all numbers from 1 to 'number' to check for divisibility
    for (int potentialDivisor = 1; potentialDivisor <= number; potentialDivisor++) {
        
        // If 'number' is divisible by 'potentialDivisor', print it
        if (number % potentialDivisor == 0) {
            System.out.print(potentialDivisor + " ");
        }
    }
}


//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int n = scn.nextInt();
            divisor(n);
            System.out.println();
        
System.out.println("~");
}
        scn.close();
    }
}
// } Driver Code Ends