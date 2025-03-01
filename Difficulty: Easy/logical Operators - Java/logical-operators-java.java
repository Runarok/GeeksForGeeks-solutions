//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Geeks {
    
    // Function to perform logical operations and print the results
    static void logicOp(boolean a, boolean b){
        // Print the result of logical AND (a&&b)
        System.out.print((a && b) + " ");
        
        // Print the result of logical OR (a||b)
        System.out.print((a || b) + " ");
        
        // Print the result of logical NOT of a and NOT of b, and then AND them (!a && !b)
        System.out.print((!a && !b));
    }
}


//{ Driver Code Starts.

class GFG {
	public static void main (String[] args) {
		
		//taking input using Scanner class
		Scanner sc = new Scanner(System.in);
		
		//taking total testcases
		int testcases = sc.nextInt();
		
		while(testcases-- > 0){
		    
		    //taking the two boolean values
		    boolean a = sc.nextBoolean();
		    boolean b = sc.nextBoolean();
		    
		    //creating an object of class Geeks
		    Geeks g = new Geeks();
		    
		    //calling the method logicOp() 
		    //and passing a,b as arguments
		    g.logicOp(a, b);
		    System.out.println();
		
System.out.println("~");
}
	}
}
// } Driver Code Ends