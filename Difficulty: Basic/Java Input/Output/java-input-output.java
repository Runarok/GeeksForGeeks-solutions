//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        while(t-- > 0)
        {
            String S = in.next();
            int N = in.nextInt();
            
            Solution ob = new Solution();
            ob.printIntString(S,N);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to print string and integer
    static void printIntString(String S, int N) {
        // Printing the input string
        System.out.println("The input string :" + S);
        
        // Printing the input integer
        System.out.println("The input integer :" + N);
    }
}
