//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String N = br.readLine().trim();
            Solution ob = new Solution();
            int ans = ob.findMinMultiple(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    public int findMinMultiple(String N)
    {
        // Calculate the power of 10 based on the number of digits after the decimal point
        int temp = (int) Math.pow(10, N.substring(N.indexOf('.') + 1).length());
        
        // Return the result by dividing the power of 10 by the GCD of the integer part of the number 
        // and the calculated power of 10
        return temp / gcd(Integer.parseInt(N.replaceAll("\\.", "")), temp);
    }
    
    // Helper method to calculate the greatest common divisor (GCD)
    private int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }
}
