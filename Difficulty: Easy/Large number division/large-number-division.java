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
            String s = read.readLine().trim();
            int d = Integer.parseInt(read.readLine().trim());
            Solution ob = new Solution();
            System.out.println(ob.longDivision(s, d));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    String longDivision(String S, int D){
        // StringBuilder to store the result of division
        StringBuilder result = new StringBuilder();

        // Convert the input string to a character array for processing each digit
        char[] dividend = S.toCharArray();
        
        // Variable to keep track of the remainder (carry) after each division step
        int carry = 0;

        // Iterate through each digit of the dividend
        for (int i = 0; i < dividend.length; i++) {
            // Form the current number to divide (carry * 10 + current digit)
            int currentNumber = carry * 10 + Character.getNumericValue(dividend[i]);

            // Append the quotient digit to the result
            result.append(currentNumber / D);

            // Update the carry (remainder) for the next step
            carry = currentNumber % D;
        }

        // Remove any leading zeros from the result
        for (int i = 0; i < result.length(); i++) {
            if (result.charAt(i) != '0') {
                return result.substring(i);
            }
        }

        // If all characters were zeros, return "0"
        return "0";
    }
}
