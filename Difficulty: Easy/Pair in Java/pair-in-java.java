//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

// Pair class
class Pair{
    int x;
    int y;
    
    public Pair(int x, int y){
        this.x = x;
        this.y = y;
    }
}


// } Driver Code Ends

// User function Template for Java

// Custom comparator class to sort the pairs
// based on the first element (x coordinate)
class custom_Compare {
    
    // Compare function to sort pairs
    static void sortPairs(Pair arr[], int N) {
        
        // Sorting array of pairs based on the 'x' value of each pair
        Arrays.sort(arr, Comparator.comparingInt(p -> p.x));
        
        // Printing the pairs (x, y) after sorting
        for (int i = 0; i < N; i++) {
            System.out.print(arr[i].x + " " + arr[i].y + " ");
        }
        
        // Moving to the next line after printing all pairs
        System.out.println();
    }
}


//{ Driver Code Starts.

// Driver class with main function
class GFG {
    
    // Driver code
	public static void main (String[] args) {
		
		//taking input using Scanner class 
		Scanner sc = new Scanner(System.in);
		
		//taking count of testcases
		int testcase = sc.nextInt();
		
		while(testcase-- > 0){
		    
		    //taking count of elements
		    int N = sc.nextInt();
		    
		    // Creating an array of Pair
		    Pair arr[] = new Pair[N];
		    
		    //adding elements to Pair array
		    for(int i = 0;i<N;i++){
		        int x = sc.nextInt();
		        int y = sc.nextInt();
		        arr[i] = new Pair(x, y);
		    }
		    
		    //creating an object of custom_Compare class
		    custom_Compare obj = new custom_Compare();
		    
		    //calling sortPairs() method of
		    //class  custom_Compare
		    obj.sortPairs(arr, N);
		
System.out.println("~");
}
	}
}
// } Driver Code Ends