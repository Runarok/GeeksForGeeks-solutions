//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

/* Class Geeks with its member function columnWithMaxZero()
 * a[][] = matrix input
 * n : number of rows and columns each
 */
class Geeks {

    static int columnWithMaxZero(int a[][], int n) {

        // Initialize the column with maximum zeros and the count of zeros
        int column = 0;
        int maxZero = 0;
        
        // Traverse each column
        for (int j = 0; j < n; j++) {
            int countZero = 0;
            
            // Count the number of zeros in the current column
            for (int i = 0; i < n; i++) {
                if (a[i][j] == 0) {
                    countZero++;
                }
            }

            // If the current column has more zeros than the previously found columns, update
            if (countZero > maxZero) {
                maxZero = countZero;
                column = j;
            }
        }

        // Return the column with the maximum number of zeros
        return column;
    }
}


//{ Driver Code Starts.

// Driver class
class GFG {
    
    // Driver code
	public static void main (String[] args) {
	    // Taking input using scanner class
		Scanner sc = new Scanner(System.in);
		
		//taking testcases
		int testcase = sc.nextInt();
		
		while(testcase-- > 0){
		    
		    //taking size of 2d-array
		    int n = sc.nextInt();

            //creating a 2d-array
		    int a[][] = new int[n][n];
		    
		    //adding elements to the array
		    for(int i = 0;i<n;i++){
		        for(int j = 0;j<n;j++){
		            a[i][j] = sc.nextInt();
		        }
		    }
		    
		    //creating an object of Geeks clas
		    Geeks obj = new Geeks();
		    
		    //calling the method columnWithMaxZero()
		    //of class Geeks
		    System.out.println(obj.columnWithMaxZero(a, n));
		
System.out.println("~");
}
	}
}
// } Driver Code Ends