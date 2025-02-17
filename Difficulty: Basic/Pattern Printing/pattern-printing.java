//{ Driver Code Starts
//Initial Template for Java
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
            int N=sc.nextInt();
			
            Solution ob = new Solution();
            ob.printPattern(N);
            System.out.println();
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution{
    static void printPattern(int n)
    {
        // Outer loop to handle the number of rows
        for(int i = 1; i <= n; i++){
            // Inner loop to print '*' characters for each row
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            // Print space after each row of stars
            System.out.print(" ");
        }  
    }
}
