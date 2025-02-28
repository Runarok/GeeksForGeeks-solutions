//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

/* Class Geeks with its member function interchange()
 * a[][] = matrix input
 * r : number of rows
 * c : number of columns
 */
class Geeks {
    
    // Function to interchange the first and last column of the matrix
    static void interchange(int a[][], int r, int c) {
        
        // Iterate through each row to swap the first and last column elements
        for (int i = 0; i < r; i++) {
            // Store the first column element in a temporary variable
            int temp = a[i][0];
            
            // Swap the first column element with the last column element
            a[i][0] = a[i][c - 1];
            a[i][c - 1] = temp;
            
            // Optionally print swapped values for debugging (commented out)
            // System.out.println("Values to swap " + a[i][0] + " " + a[i][c - 1]);
        }

        // Print the updated matrix after the swap
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    }
}



//{ Driver Code Starts.

// Driver class
class GFG {
    
    // Driver code
	public static void main (String[] args) {
	    
	    // Taking input using scanner class
		Scanner sc = new Scanner(System.in);
		
		//taking total testcases
		int testcase = sc.nextInt();
		
		while(testcase-- > 0){
		    
		    //taking row and column count
		    int rows = sc.nextInt();
            int cols = sc.nextInt();
            
            //creating a 2d-array 
		    int a[][] = new int[rows][cols];
		    
		    //adding elements to the 2d-array
		    for(int i = 0;i<rows;i++){
		        for(int j = 0;j<cols;j++){
		            a[i][j] = sc.nextInt();
		        }
		    }
		    
		    //creating an object of class Geeks
		    Geeks obj = new Geeks();
		    
		    //calling interchange() method 
		    //of class Geeks
		    obj.interchange(a, rows, cols);
		
System.out.println("~");
}
	}
}
// } Driver Code Ends