//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.count(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    // Function to count the number of perfect squares less than or equal to N
    static long count(int N)        
    {
       // The number of perfect squares up to N is the integer part of the square root of N
       return (long) Math.sqrt(N);  // Casting the result to long as the return type is long
    }
}
