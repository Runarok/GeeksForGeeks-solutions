//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		//taking input using Scanner class
		Scanner sc = new Scanner(System.in);
		
		//taking testcases count
		int t=sc.nextInt();
		while(t-->0)
		{
		    //taking n
		    int n =sc.nextInt();
		
	        //creating an object of class Geeks	
		    Geeks obj=new Geeks();
		    
		    //calling isDivisbleByPrime()
		    //method of class Geeks
		    obj.isDivisibleByPrime(n);
		
System.out.println("~");
}
	
		
	}
}

// } Driver Code Ends

class Geeks {
    // Function to check divisibility by 2, 3, and 11, and print corresponding outputs
    static void isDivisibleByPrime(int n) {
        // Check if divisible by 2, 3, and 11
        if (n % 2 == 0 && n % 3 == 0 && n % 11 == 0) {
            System.out.println("Eleven");
        }
        // Check if divisible by 2 and 3
        else if (n % 2 == 0 && n % 3 == 0) {
            System.out.println("Three");
        }
        // Check if divisible by 3 and 11
        else if (n % 3 == 0 && n % 11 == 0) {
            System.out.println("Eleven");
        }
        // Check if divisible by 2 and 11
        else if (n % 2 == 0 && n % 11 == 0) {
            System.out.println("Eleven");
        }
        // Check if divisible only by 2
        else if (n % 2 == 0) {
            System.out.println("Two");
        }
        // Check if divisible only by 3
        else if (n % 3 == 0) {
            System.out.println("Three");
        }
        // Check if divisible only by 11
        else if (n % 11 == 0) {
            System.out.println("Eleven");
        }
        // If not divisible by 2, 3, or 11, print -1
        else {
            System.out.println("-1");
        }
    }
}



//{ Driver Code Starts.

/*package whatever //do not write package name here */
// } Driver Code Ends