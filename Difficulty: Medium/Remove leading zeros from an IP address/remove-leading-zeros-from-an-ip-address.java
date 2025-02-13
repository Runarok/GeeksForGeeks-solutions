//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

public class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String s = sc.next();
                    Solution ob = new Solution();
                    System.out.println(ob.newIPAdd(s));
                }
        }
}
// } Driver Code Ends

class Solution {
    public String newIPAdd(String S) {
        // Split the given IP address into parts based on "."
        String[] t = S.split("\\.");
        int n = t.length;
        
        // Iterate over each part of the IP address
        for (int i = 0; i < n; i++) {
            int j = 0;
            String s = t[i];
            
            // Skip leading zeros in each part of the IP address
            while (j < (s.length() - 1) && s.charAt(j) == '0') {
                j++;
            }
            
            // Update the part of the IP by removing the leading zeros
            t[i] = s.substring(j);
        }
        
        // Build the final IP address without leading zeros in parts
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < (n - 1); i++) {
            res.append(t[i]);
            res.append(".");
        }
        
        // Append the last part of the IP
        res.append(t[n - 1]);
        
        // Return the formatted IP address
        return res.toString();
    }
}
