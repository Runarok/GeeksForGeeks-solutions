//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class GFG{
	public static void main(String [] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int test = Integer.parseInt(br.readLine());
		while(test-- > 0) {
			String [] str = br.readLine().trim().split(" ");
			String s = str[0];
			int m = Integer.parseInt(str[1]);
			Solution obj = new Solution();
			System.out.println(obj.modulo(s,m));
		
System.out.println("~");
}
	}
}

// } Driver Code Ends

//User function Template for Java

class Solution{
    // Function to calculate the modulo of a binary string with respect to m
    int modulo(String s, int m) {
        // Convert the binary string to a BigInteger
        java.math.BigInteger bi = new java.math.BigInteger(s, 2);
        // Calculate the modulo of the BigInteger with m
        bi = bi.mod(java.math.BigInteger.valueOf(m));
        // Return the result as an integer
        return bi.intValue();
    }
}
