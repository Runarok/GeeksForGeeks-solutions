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
            String n = br.readLine().trim();
            Solution obj = new Solution();
            obj.toBinary(n);
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public void toBinary(String N) {
        // Convert the input string N to an integer
        int n = Integer.parseInt(N);
        
        // Initialize an array to store the binary representation (sufficient size)
        int[] binArray = new int[1000];
        
        // Variable to keep track of the index in the binary array
        int i = 0;
        
        // While n is greater than 0, calculate the binary digits
        while (n != 0) {
            // Store the remainder (binary digit) in the array
            binArray[i] = n % 2;
            n = n / 2; // Divide n by 2 for the next iteration
            i++; // Increment index for the next binary digit
        }
        
        // Print the binary digits in reverse order (from highest bit to lowest)
        for (int j = i - 1; j >= 0; j--) {
            System.out.print(binArray[j]);
        }
    }
}
