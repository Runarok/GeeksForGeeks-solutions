//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while(t-- > 0)
        {
            String input[];
            input = br.readLine().trim().split(" ");
            int n = Integer.parseInt(input[0]);
            int k = Integer.parseInt(input[1]);
            Solution ob = new Solution();
            
            System.out.println(ob.replaceBit(n,k));    
        }
    }
}
// } Driver Code Ends

class Solution {
    public static int replaceBit(int n, int k) {
        // Convert the number to its binary representation as a string
        String binaryString = Integer.toBinaryString(n);
        
        // If k is greater than the length of the binary string, return the original number
        if (k > binaryString.length()) {
            return n;
        }
        
        // Replace the k-th bit (from the left) with '0'
        binaryString = binaryString.substring(0, k - 1) + "0" + binaryString.substring(k);
        
        // Convert the modified binary string back to an integer
        return Integer.parseInt(binaryString, 2);
    }
}
