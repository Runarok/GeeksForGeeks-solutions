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
            System.out.println(ob.repeatedSumOfDigits(N));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    static int repeatedSumOfDigits(int N) {
        // If N is 0, return 0
        if (N == 0) return 0;
        
        // If N is divisible by 9, return 9 as the repeated sum of digits
        if (N % 9 == 0) return 9;
        
        // Otherwise, return the remainder when N is divided by 9
        else return N % 9;
    }
}
