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
            String str = br.readLine().trim();
            Solution ob = new Solution();
            String ans = ob.FindInputType(str);
            System.out.println(ans);
        }
    }
}



// } Driver Code Ends

// User function Template for Java

class Solution
{
    public String FindInputType(String str)
    {
        // Check if the string is an integer (only digits)
        if (str.matches("\\d+")) {
            return "int";
        }
        // Check if the string is a floating-point number (contains digits and a decimal point)
        else if (str.matches("\\d+\\.\\d+")) {
            return "float";
        }
        // Check if the string is a single non-digit character (char)
        else if (str.length() == 1 && !Character.isDigit(str.charAt(0))) {
            return "char";
        }
        // Otherwise, treat it as a string
        else {
            return "string";
        }
    }
}
