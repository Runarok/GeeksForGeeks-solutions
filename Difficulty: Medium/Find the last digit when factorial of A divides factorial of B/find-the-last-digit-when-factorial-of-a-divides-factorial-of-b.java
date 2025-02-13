//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String arr[] = in.readLine().trim().split("\\s+");
            long A = Long.parseLong(arr[0]);
            long B = Long.parseLong(arr[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.lastDigit(A, B));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int lastDigit(long A, long B) {
        int lastDigit = 1;
        long product = 1;

        while (B > A) {
            product = (product * B) % 10; // Keep only the last digit
            B--;
        }

        return (int) product;
    }
}
