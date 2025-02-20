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
            String N = read.readLine();
            
            Solution ob = new Solution();
            if(ob.check_duck(N))
            System.out.println("YES");
            else
            System.out.println("NO");

            
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Function to check if a number is a Duck number.
     * A Duck number is a number that contains a '0' 
     * but does not start with '0'.
     * 
     * @param N The input number as a string.
     * @return true if the number is a Duck number, otherwise false.
     */
    static boolean check_duck(String N) {
        boolean nonZeroEncountered = false;
        
        // Iterate through each character in the string
        for (char digit : N.toCharArray()) {
            // Mark that a non-zero digit has been encountered
            if (digit != '0') {
                nonZeroEncountered = true;
            }
            
            // If a zero appears after a non-zero digit, return true
            if (nonZeroEncountered && digit == '0') {
                return true;
            }
        }
        
        // Return false if no zero was found after a non-zero digit
        return false;
    }
}
