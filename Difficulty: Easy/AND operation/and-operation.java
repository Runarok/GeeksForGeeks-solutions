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
            String s = br.readLine().trim();
            String[] S = s.split(" ");
            int l = Integer.parseInt(S[0]);
            int r = Integer.parseInt(S[1]);
            Solution ob =new Solution();
            int ans = ob.find_and(l, r);
            System.out.println(ans);
        }
	}
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int find_and(int l, int r) {
        // Code to find the AND of all numbers in the range [l, r]
        
        // Keep reducing the value of r by performing bitwise AND with (r-1)
        // until l is no longer less than r
        while (l < r) {
            r = r & (r - 1); // Perform AND operation with (r - 1)
        }
        
        // After the loop ends, return the bitwise AND of the modified r and l
        return r & l;
    }
}
