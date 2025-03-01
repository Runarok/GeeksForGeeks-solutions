//{ Driver Code Starts
//Initial Template for Java
/*package whatever //do not write package name here */

import java.io.*;
import java.util.Scanner;

class GFG {
	public static void main (String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int t=sc.nextInt();
	    while(t-->0)
	    {
	        int a=sc.nextInt();
	        int b=sc.nextInt();
	        TestClass obj1=new TestClass(a,b);
	        obj1.findMin();
	    
System.out.println("~");
}
	}
}


// } Driver Code Ends

// User function Template for Java

class TestClass {
    // Private member variables to store the input values.
    private int a, b;

    // Constructor to initialize the variables with given values.
    public TestClass(int a, int b) {
        this.a = a;
        this.b = b;
    }

    // Method to find and print the minimum value of the expressions: a + b, a - b, a * b, a / b.
    public void findMin() {
        // Initialize the minimum value to the maximum possible integer value.
        int minValue = Integer.MAX_VALUE;

        try {
            // Compare and update minimum value with sum of a and b.
            minValue = Math.min(minValue, a + b);

            // Compare and update minimum value with difference of a and b.
            minValue = Math.min(minValue, a - b);

            // Compare and update minimum value with product of a and b.
            minValue = Math.min(minValue, a * b);

            // Try division only if division is valid (to avoid divide by zero error).
            try {
                minValue = Math.min(minValue, a / b);
            } catch (ArithmeticException e) {
                // Catch block for divide by zero, but do nothing if it occurs.
            }

        } catch (Exception e) {
            // In case of any unexpected exception, print error message.
            System.out.println("Error " + e.getMessage());
        }

        // Print the final minimum value obtained.
        System.out.println(minValue);
    }
}



//{ Driver Code Starts.

// } Driver Code Ends