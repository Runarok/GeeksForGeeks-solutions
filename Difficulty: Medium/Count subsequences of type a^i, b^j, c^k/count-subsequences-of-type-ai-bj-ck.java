//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner (System.in);
		int t = Integer.parseInt(sc.next());
		
		while(t>0)
		{
		    String s = sc.next();
		    
		    Solution T = new Solution();
		    System.out.println(T.fun(s));
		    
		    t--;
		
System.out.println("~");
}
	}
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    public int fun(String s)
    {
        int n = s.length();
        
        // using three variables to store intermediate results
        int a = 0;
        int ab = 0;
        int abc = 0;
        
        int mod = 1_000_000_007;
        
        // Loop through the string to calculate the values for a, ab, and abc
        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            
            // If the current character is 'a', update the count of 'a'
            if (ch == 'a') { 
                a = ((2 * a) % mod + 1) % mod;
                
            } else if (ch == 'b') { // If 'b', update the count of 'ab'
                ab = ((2 * ab) % mod + a) % mod;
                
            } else if (ch == 'c') { // If 'c', update the count of 'abc'
                abc = ((2 * abc) % mod + ab) % mod;
            }
        }
        
        return abc; // Return the final result for 'abc'
    }
}
