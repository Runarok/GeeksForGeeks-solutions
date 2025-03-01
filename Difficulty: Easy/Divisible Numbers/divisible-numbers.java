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
            String S[] = read.readLine().split(" ");
            long A = Long.parseLong(S[0]);
            long B = Long.parseLong(S[1]);
            Solution ob = new Solution();
            System.out.println(ob.find(A,B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the result based on A and B
    static long find(long A, long B) {  
        // Calculate the remainder when A is divided by B
        long mod = A % B;
        
        // Calculate the difference between B and the remainder
        long diff = B - mod;
        
        // Return the sum of A and the difference
        return A + diff;
    } 
}
