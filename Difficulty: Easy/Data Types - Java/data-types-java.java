//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Geeks {
    
    // Function to perform operations with different data types
    static void dataTypes(int a, float b, double c, long l, byte d) {
        
        // Perform the specified operations
        double p = c / b;  // Division of double by float
        double q = b / a;  // Division of float by int
        double r = c / a;  // Division of double by int
        double m = r + l;  // Addition of double and long
        int s = a / d;     // Division of int by byte (result is int)
        
        // Printing all the results in the required format
        System.out.println(p + " " + q + " " + r + " " + m + " " + s);
    }
}


//{ Driver Code Starts.

class GFG {
    // Driver code
	public static void main (String[] args) {
	    
	    // Input using Scanner class
	    Scanner sc = new Scanner(System.in);
		int a;
		float b;
		double c;
		long l;
		byte d;
		
		//Taking input number of testcases 
		int t = sc.nextInt();
		
		while(t-- > 0){
		    
		    //taking input all the different datatypes in their respective variables
		    a = sc.nextInt();
		    b = sc.nextFloat();
		    c = sc.nextDouble();
		    l = sc.nextLong();
		    d = sc.nextByte();
		    
		    //Creating an object of class Geeks
		    Geeks g = new Geeks();
		    
		    //Calling dataTypes method of class Geeks
		    g.dataTypes(a, b, c, l, d);
		
System.out.println("~");
}
	}
}
// } Driver Code Ends