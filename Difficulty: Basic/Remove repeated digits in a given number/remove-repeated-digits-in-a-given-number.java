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
            long num = Long.parseLong(read.readLine()); 
            Solution ob = new Solution();
            System.out.println(ob.modify(num));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public long modify(long N) {
        
        long currentDigit = 0;  // Stores the current digit being processed
        long previousDigit = -1; // Keeps track of the last digit processed
        long result = 0;  // Stores the final modified number
        long placeValue = 1;  // Keeps track of the positional value of the digit

        while (N > 0) {
            currentDigit = N % 10;  // Extract the last digit of the number
            
            if (currentDigit != previousDigit) { // Check if the digit is different from the previous one
                result += currentDigit * placeValue;  // Add the digit to the result at the correct place
                placeValue *= 10;  // Update the place value for the next digit
            }

            previousDigit = currentDigit;  // Update the previous digit tracker
            N /= 10;  // Remove the last digit from the number
        }

        return result;
    }
}
