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
                    int N = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.diagonals(N));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

// User function Template for Java

class Solution
{
    /**
     * Function to calculate the number of diagonals in an n-sided polygon.
     * @param n the number of sides of the polygon.
     * @return the number of diagonals in the polygon.
     */
    public long diagonals(long n) 
    { 
        // A polygon with fewer than 3 sides cannot have diagonals
        if(n < 3) {
            return 0;
        }
        // Formula to calculate the number of diagonals in a polygon: n * (n - 3) / 2
        return (n * (n - 3)) / 2;
    } 
}
