//{ Driver Code Starts
//Initial Template for Java
/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Geeks g = new Geeks();
		g.getInput();
	}
}
// } Driver Code Ends

// User function Template for Java

// Complete the function
// Take input for a and s 

class Geeks {
    static void getInput() {
        
        // Create scanner object to read input
        Scanner sc = new Scanner(System.in);
        
        // Take the number of test cases
        int t = sc.nextInt();
        
        // Iterate over the test cases
        while (t-- > 0) {
            // Read integer a
            int a = sc.nextInt();
            
            // Consume the leftover newline character
            sc.nextLine();
            
            // Read string s
            String s = sc.nextLine();
            
            // Output the values of a and s
            System.out.println(a);
            System.out.println(s);
        }
    }
}
