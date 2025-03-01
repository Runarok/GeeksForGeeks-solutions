//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int t=sc.nextInt();
		
		while(t-->0)
		{
    		int a = sc.nextInt();
    		int b = sc.nextInt();
    		Geeks obj=new Geeks();
    		obj.evenOdd(a,b);
		
System.out.println("~");
}
		
	
		
	}
}


// } Driver Code Ends

//User function Template for Java

// Function to check if numbers are even or odd
class Geeks {
    
    // Function to print numbers, even numbers should be printed first
    static void evenOdd (int a, int b) 
    {
        // Check both numbers for even/odd status and print accordingly
        if (a % 2 == 0 && b % 2 == 0) {
            // Both numbers are even, print in order
            System.out.println(a);
            System.out.println(b);
        } 
        else if (a % 2 == 0) {
            // First number is even, print even first then odd
            System.out.println(a);
            System.out.println(b);
        } 
        else if (b % 2 == 0) {
            // Second number is even, print even first then odd
            System.out.println(b);
            System.out.println(a);
        }
    }
}



//{ Driver Code Starts.




// } Driver Code Ends