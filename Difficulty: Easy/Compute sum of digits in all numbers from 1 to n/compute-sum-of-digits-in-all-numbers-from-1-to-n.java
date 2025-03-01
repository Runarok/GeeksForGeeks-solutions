//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to calculate the sum of digits of all numbers from 1 to N
    static int sumOfDigits(int N) {
        int c = 0;

        // Loop through all numbers from 1 to N
        for (int i = 1; i <= N; i++) {
            int t = i;

            // Loop to extract and add each digit of the number to the sum
            while (t != 0) {
                c += t % 10;  // Add the last digit to the sum
                t /= 10;      // Remove the last digit
            }
        }

        // Return the total sum of digits
        return c;
    }
}


//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
           
            Solution ob = new Solution();
            System.out.println(ob.sumOfDigits(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends