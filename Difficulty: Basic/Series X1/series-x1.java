//{ Driver Code Starts
//Initial Template for Java//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int X =sc.nextInt();
		
            Solution ob = new Solution();
         
            long ans = ob.X1Series(X);
           
            System.out.println(ans);
        }  
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Method to calculate the X1 series for a given X
    long X1Series(int X) {
        // Calculate the series value as X^3 + X and return it as a long value
        long ans = (long)Math.pow(X, 3) + X;
        
        // Return the result
        return ans;
    }
}
