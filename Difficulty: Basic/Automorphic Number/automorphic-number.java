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
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            String ans = ob.is_AutomorphicNumber(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

class Solution
{
    /**
     * Function to check if the given number is an Automorphic number.
     * @param n the input number.
     * @return "Automorphic" if the number is Automorphic, otherwise "Not Automorphic".
     */
    public String is_AutomorphicNumber(int n)
    {
        // Calculate the square of the number.
        int s = n * n;

        // Get the last digit of both the square and the original number.
        int a = s % 10;
        int b = n % 10;

        // Check if the last digits match.
        if (a == b) {
            return "Automorphic";  // If last digits match, it is Automorphic.
        }
        else {
            return "Not Automorphic";  // Otherwise, it is not Automorphic.
        }
    }
}
