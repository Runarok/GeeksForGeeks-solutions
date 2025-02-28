//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();

        while (t-- > 0) {
            // taking total count of elements
            int n = sc.nextInt();

            // Declaring and Initalizing an Array
            // of type Points and size n
            Point points[] = new Point[n];

            // adding x and y points to the Array
            for (int i = 0; i < n; i++) {
                points[i] = new Point(sc.nextInt(), sc.nextInt());
            }

            // calling coordinatesSort method
            // and passing the Points array
            coordinatesSort(points);

            // Calling the toString method
            // of Points class and printing the
            // result
            for (int i = 0; i < n; i++) {
                System.out.print(points[i].toString());
            }

            System.out.println();
        }
    }

    
// } Driver Code Ends

public static void coordinatesSort(Point[] arr) {
    // Use lambda expressions to define the sorting order
    // First, compare the x-coordinate, if they are equal, compare the y-coordinate
    Comparator<Point> comparator = (p1, p2) -> {
        if (p1.x == p2.x) return p1.y - p2.y;  // If x is the same, compare y
        return p1.x - p2.x;  // Compare x-coordinates
    };
    
    // Sort the array using the comparator defined above
    Arrays.sort(arr, comparator);
}



//{ Driver Code Starts.
}

class Point {
    public int x;
    public int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public String toString() { return ("(" + this.x + "," + this.y + ") "); }
}
// } Driver Code Ends