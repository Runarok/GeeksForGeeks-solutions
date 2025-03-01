//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            long N = Long.parseLong(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.winner(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Determines the winner based on the given number N.
     * 
     * @param N The input number.
     * @return "Mike" if N is even, "Harvey" if N is odd.
     */
    static String winner(long N) {
        // If N is even, Mike wins; if N is odd, Harvey wins.
        return N % 2 == 0 ? "Mike" : "Harvey";
    }
}
