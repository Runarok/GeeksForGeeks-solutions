//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    int r = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.latticePoints(r));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the number of lattice points on a circle with radius r
    public int latticePoints(int r) {
        // If the radius is less than or equal to 0, there are no lattice points
        if (r <= 0)
            return 0; 
        
        // Initialize result with 4 for the points (r, 0), (-r, 0), (0, r), and (0, -r)
        int result = 4;
        
        // Check every possible value of x from 1 to r-1
        for (int x = 1; x < r; x++) {
            // Calculate the corresponding y^2 from the equation of the circle
            int ySquare = r * r - x * x;
            
            // Calculate the integer value of y
            int y = (int) Math.sqrt(ySquare);
            
            // If y^2 equals the calculated value, it means y is a valid integer
            // Increment the result by 4 for the 4 quadrants (positive and negative x, y)
            if (y * y == ySquare)
                result += 4;
        }
        
        // Return the total number of lattice points
        return result;
    }
}
