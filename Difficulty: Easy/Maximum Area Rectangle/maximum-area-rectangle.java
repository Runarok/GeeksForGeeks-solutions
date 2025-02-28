//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

// Pair class
class Rectangle{
    int length;
    int breadth;
    
    // Constructor
    public Rectangle(int x, int y){
        this.length = x;
        this.breadth = y;
    }
    
    // Funtion to find area
    public int area(){
        return (this.length*this.breadth);
    }
}


// } Driver Code Ends

// User function Template for Java

/* Class maxArea to calculate Area of rectangles
* arr : array containing rectangles
* calculate_Area : function to calculate area
* and return the maximum area
*/

class maxArea {

    // Function to calculate the area of each rectangle and return the maximum area
    static int calculate_Area(Rectangle arr[]) {

        // Variable to keep track of the maximum area
        int maxArea = 0;

        // Iterate through each rectangle in the array
        for (Rectangle rec : arr) {
            // Calculate the area of the current rectangle
            int area = rec.length * rec.breadth;

            // Update maxArea if the current rectangle's area is larger
            if (maxArea < area) {
                maxArea = area;
            }
        }

        // Return the maximum area found
        return maxArea;
    }
}


//{ Driver Code Starts.


// Driver class with main function
class GFG {
    
    // Driver code
	public static void main (String[] args) {
		
		//taking input using Scanner class
		Scanner sc = new Scanner(System.in);
		
		//taking total testcases
		int testcase = sc.nextInt();
		
		while(testcase-- > 0){
		    int N = sc.nextInt();
		    
		    // Creating an array of Pair
		    Rectangle arr[] = new Rectangle[N];
		    
		    // Taking input length and breadth
		    for(int i = 0;i<N;i++){
		        int length = sc.nextInt();
		        int breadth = sc.nextInt();
		        arr[i] = new Rectangle(length, breadth);
		    }
		    
		    maxArea obj = new maxArea();
		    System.out.println(obj.calculate_Area(arr));
		    
		
System.out.println("~");
}
	}
}
// } Driver Code Ends