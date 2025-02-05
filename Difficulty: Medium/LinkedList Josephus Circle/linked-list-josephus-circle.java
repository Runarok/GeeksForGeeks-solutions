//{ Driver Code Starts
//Initial Template for Java


/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		
		//Taking all the testcases
		int t = sc.nextInt();
		
		while(t-->0)
		{
		    //taking input total number people
		    int n=sc.nextInt();
		    
		    //taking input interval number
		    int k=sc.nextInt();
		    
		    //calling the method josephus
		    System.out.println(josephus(n,k));
		
System.out.println("~");
}
	}
	
// } Driver Code Ends


// User function Template for Java

public static int josephus(int n, int k)
{
    // Base case: if there's only one person left, they are the survivor.
    // We return 0 because the index starts from 0 in this implementation.
    if(n == 1) return 0;
    
    // Recursive case:
    // The Josephus position for n people can be reduced to a Josephus problem for (n-1) people
    // after eliminating one person, and then adjusting for the kth step by adding k and taking
    // modulo n to wrap around the circle.
    return (josephus(n - 1, k) + k) % n;
}



//{ Driver Code Starts.

	
}
// } Driver Code Ends