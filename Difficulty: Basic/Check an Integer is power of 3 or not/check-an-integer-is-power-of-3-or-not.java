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
            System.out.println(ob.isPowerof3(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    
    // Function to check if a number is a power of 3
    static String isPowerof3(int N) {
        // Calculate the logarithm of N base 3 using the formula log(N) / log(3)
        double p = Math.log10(N) / Math.log10(3);
        
        // If the decimal part of the result is 0, then it's a power of 3
        if (p - Math.floor(p) == 0)
            return "Yes";  // Return "Yes" if N is a power of 3
        else
            return "No";   // Return "No" if N is not a power of 3
    }
}
