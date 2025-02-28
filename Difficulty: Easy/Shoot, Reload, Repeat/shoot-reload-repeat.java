//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0)
        {
            String s = in.readLine();
            int n = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            
            System.out.println(ob.isValid (s, n));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution
{
    int isValid (String s, int m)
    {
        // Maximum allowed strength count
        int remainingStrength = m;
        
        // Traverse the given string
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            
            // If we encounter 'S' (a strength unit is required)
            if (ch == 'S') {
                if (remainingStrength > 0) {
                    remainingStrength--; // Use one strength unit
                } else {
                    return 0; // Not enough strength left to proceed
                }
            }
            
            // If we encounter 'R', reset the available strength to full (m)
            if (ch == 'R') {
                remainingStrength = m;
            }
        }
        
        // If we successfully traversed the entire string, return 1 (valid)
        return 1;
    }
}
