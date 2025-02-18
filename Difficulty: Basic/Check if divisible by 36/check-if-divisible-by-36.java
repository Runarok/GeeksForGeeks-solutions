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
            String S = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.checkDivisible36(S));
        }
    }
}
// } Driver Code Ends

class Solution {
    static int checkDivisible36(String S) {
        // Extract the last two digits as an integer
        int n = Integer.parseInt(S.substring(S.length() - 2));
        
        // Calculate the sum of digits in the string
        int sum = 0;
        char[] ch = S.toCharArray();
        for (char arr : ch) {
            sum += arr - '0';
        }
        
        // Check if the number is divisible by both 4 and 9
        if (n % 4 == 0 && sum % 9 == 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
