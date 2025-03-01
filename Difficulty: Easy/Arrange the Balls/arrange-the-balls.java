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
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.numberOfWays(N));
        }
    }
}

// } Driver Code Ends

class Solution {
    // Function to calculate the number of ways based on the given formula
    static Long numberOfWays(Long N) {
        // Formula (N+1)*(N+2)/2 calculates the number of ways to choose pairs
        // from the range 1 to N. This is derived from the sum of the first N numbers.
        return (N + 1) * (N + 2) / 2;
    }
}
