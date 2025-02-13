//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;
class GfG
{
    public static void main (String[] args)
    {
        
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int A[] = new int[2];
    		int B[] = new int[2];
    		int C[] = new int[2];
            A[0]=sc.nextInt();
            A[1]=sc.nextInt();
            B[0]=sc.nextInt();
            B[1]=sc.nextInt();
            C[0]=sc.nextInt();
            C[1]=sc.nextInt();
		    
		    Solution ob = new Solution();
		    
		    double[] ans = ob.findPoint(A, B, C);
		    String a1 = String.format("%.6f",ans[0]);
		    String a2 = String.format("%.6f",ans[1]);
		    System.out.println(a1+" "+a2);

        
System.out.println("~");
}
        
    }
}
// } Driver Code Ends

class Solution {
    // Inner class to represent a point with x and y coordinates
    public class Point {
        double x, y;
        Point(double x, double y) {
            this.x = x;
            this.y = y;
        }
    }

    // Custom comparator to sort points primarily by x coordinate and then by y coordinate
    public class CustomSort implements Comparator<Point> {
        public int compare(Point a, Point b) {
            if (a.x < b.x)
                return -1; // a comes before b if a.x < b.x
            else if (a.x > b.x)
                return 1;  // b comes before a if a.x > b.x
            else {
                if (a.y < b.y)
                    return -1; // If x is the same, sort by y
                else return 1;
            }
        }
    }

    // Method to calculate the distance between two points
    public double dis(Point a, Point b) {
        double ans = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2); // Calculate the squared distance
        return Math.sqrt(ans); // Return the square root of the squared distance
    }

    // Method to calculate the slope between two points
    public double slope(Point a, Point b) {
        if (a.x == b.x)
            return Double.MAX_VALUE; // Vertical line has an undefined slope (infinity)
        double ans = (a.y - b.y) / (a.x - b.x); // Standard slope formula (y2 - y1) / (x2 - x1)
        return ans;
    }

    // Method to find the missing point given two other points in a triangle
    public Point findMissingPoint(Point A, Point B, Point C) {
        double dis = dis(B, C); // Calculate distance between points B and C
        double m = slope(B, C); // Calculate the slope of the line through points B and C
        Point a1 = new Point(0.0d, 0.0d); // First possible missing point
        Point a2 = new Point(0.0d, 0.0d); // Second possible missing point

        if (m == Double.MAX_VALUE) { // Handle the case of a vertical line
            a1.x = A.x; a1.y = A.y + dis; // First possible point directly above A by distance 'dis'
            a2.x = A.x; a2.y = A.y - dis; // Second possible point directly below A by distance 'dis'
        } else {
            // Calculate the first and second possible points based on the slope
            a1.x = A.x + (dis / Math.sqrt(1 + (m * m)));
            a2.x = A.x - (dis / Math.sqrt(1 + (m * m)));
            a1.y = m * (a1.x - A.x) + A.y; // Calculate y for first possible point using slope
            a2.y = m * (a2.x - A.x) + A.y; // Calculate y for second possible point using slope
        }

        // Check which of the two points is the correct one based on distance comparison
        if (dis(C, a1) == dis(A, B))
            return a1; // Return the first point if it satisfies the condition
        else
            return a2; // Otherwise, return the second point
    }

    // Main method to find the missing point in a triangle
    public double[] findPoint(int[] A, int[] B, int[] C) {
        ArrayList<Point> pointsList = new ArrayList<>();
        
        // Create point objects for the three given points in the triangle
        Point a = new Point((double) A[0], (double) A[1]);
        Point b = new Point((double) B[0], (double) B[1]);
        Point c = new Point((double) C[0], (double) C[1]);
        
        // Find all possible missing points based on different combinations of A, B, C
        pointsList.add(findMissingPoint(a, b, c)); 
        pointsList.add(findMissingPoint(a, c, b));
        pointsList.add(findMissingPoint(b, a, c));
        pointsList.add(findMissingPoint(b, c, a));
        pointsList.add(findMissingPoint(c, a, b));
        pointsList.add(findMissingPoint(c, b, a));
        
        // Sort the points in ascending order using the custom comparator
        Collections.sort(pointsList, new CustomSort());
        
        // Prepare the result with the smallest point based on sorting order
        double[] result = {pointsList.get(0).x, pointsList.get(0).y};
        return result; // Return the smallest point's coordinates
    }
}
