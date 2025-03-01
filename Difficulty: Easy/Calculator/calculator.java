//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void utility(int a, int b, int operator) {
    // Use switch-case to perform the operation based on the operator value
    switch (operator) {
        case 1:  // Addition
            System.out.print(a + b);
            break;
        case 2:  // Subtraction
            System.out.print(a - b);
            break;
        case 3:  // Multiplication
            System.out.print(a * b);
            break;
        default:  // Invalid input for operator
            System.out.print("Invalid Input");
            break;
    }
}



//{ Driver Code Starts.

    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0) {
            int a = scn.nextInt();
            int b = scn.nextInt();
            int operator = scn.nextInt();
            utility(a, b, operator);
            System.out.println();
        }
        scn.close();
    }
}
// } Driver Code Ends