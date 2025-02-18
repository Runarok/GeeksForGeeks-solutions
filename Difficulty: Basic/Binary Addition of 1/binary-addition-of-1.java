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
            int n = Integer.parseInt(in.readLine());
            String s = in.readLine();
            
            Solution ob = new Solution();
            System.out.println(ob.binaryAdd(n, s));
        }
    }
}
// } Driver Code Ends

class Solution {
    static String binaryAdd(int n, String s) {
        int carr = 1; // Initialize carry as 1 (for the addition)
        String res = ""; // Initialize result string as empty
        
        // Traverse the string from right to left (starting from the least significant bit)
        for (int i = n - 1; i >= 0; i--) {
            // Add current bit and carry
            int add = s.charAt(i) - '0' + carr;

            // If the sum is 2, the result bit is 0 with a carry of 1
            if (add == 2) {
                res = "0" + res;
            }
            // If the sum is 1, the result bit is 1, and carry becomes 0
            else if (add == 1) {
                res = "1" + res;
                carr = 0;
            }
            // If the sum is 0, no carry, and result bit is 0
            else {
                res = "0" + res;
            }
        }
        
        // If carry remains 1, add it to the front of the result
        if (carr == 1) {
            res = "1" + res;
        }

        return res;
    }
}
