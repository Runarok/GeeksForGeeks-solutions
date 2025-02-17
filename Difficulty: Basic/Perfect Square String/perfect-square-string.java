//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            
            
            // input n array elements
            String S= read.readLine();
           

            Solution ob = new Solution();
           
            System.out.println(ob.isSquare(S));
        }
    } 
} 
// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Function to check if the sum of ASCII values of characters in the string
     * is a perfect square.
     * @param S - The input string.
     * @returns int - 1 if the sum of ASCII values is a perfect square, else 0.
     */
    static int isSquare(String S) {
        // Calculate the sum of ASCII values of characters in the string
        int sum = 0;
        for (int i = 0; i < S.length(); i++) {
            char ch = S.charAt(i);
            int asciiValue = (int) ch;
            sum += asciiValue;
        }

        // Check if the sum is a perfect square
        int sqrt = (int) Math.sqrt(sum);
        if (sqrt * sqrt == sum) {
            return 1; // The sum is a perfect square
        }
        return 0; // The sum is not a perfect square
    }
}
