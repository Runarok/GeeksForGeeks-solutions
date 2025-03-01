//{ Driver Code Starts

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
            System.out.println(ob.waysToBreakNumber(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution{
    // Function to calculate the number of ways to break the number N
    int waysToBreakNumber(int N){
        // Modulo value to avoid large numbers
        int MOD = 1000000007;
        
        // Calculate the result using the formula and apply modulo
        long result = ((long)(N + 2) * (N + 1) / 2) % MOD;
        
        // Return the result as an integer
        return (int) result;
    }
}
