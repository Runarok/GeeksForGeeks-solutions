//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        long t = Long.parseLong(read.readLine());
        while(t-- > 0)
        {
            String[] inp=read.readLine().split(" ");
            long N=Long.parseLong(inp[0]);
            Solution ob = new Solution();
            System.out.println(ob.performOperation(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to perform the operation and return the sum of modified numbers
    static long performOperation(long N){
        // Initialize variables a and b to store the modified numbers
        long a = 0, b = 0;
        
        // Convert the number N to a string to process each digit
        String s = String.valueOf(N);
        
        // Loop through each character in the string representation of N
        for (char c : s.toCharArray()) {
            // Shift both a and b left by multiplying by 10
            a *= 10;
            b *= 10;
            
            // If the character is '6', replace it with '6' for a and '5' for b
            if (c == '6' || c == '5') {
                a += 6;  // Update a with '6'
                b += 5;  // Update b with '5'
            } else {
                // Otherwise, just add the digit value to both a and b
                a += c - '0';
                b += c - '0';
            }
        }
        
        // Return the sum of the two modified numbers a and b
        return a + b;
    }
}
