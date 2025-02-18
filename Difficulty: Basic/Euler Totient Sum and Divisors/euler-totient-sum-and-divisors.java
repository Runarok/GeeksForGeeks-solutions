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
            System.out.println(ob.phiSum(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find the sum of phi(i) for all the numbers i from 1 to N.
     * @param N the upper bound number.
     * @return the sum of phi(i) values from 1 to N.
     */
    static int phiSum(int N) {
        // Placeholder code, returns N directly.
        // You can implement the logic for Euler's Totient Function (phi) here.
        return N;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        // Call the phiSum function and print the result
        System.out.println(sol.phiSum(5));
    }
}
