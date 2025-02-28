//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String st = in.readLine();
            
            Solution ob = new Solution();
            System.out.println(ob.sequence(st));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static String sequence(String inputString) {
        // StringBuilder to build the resulting string.
        StringBuilder resultBuilder = new StringBuilder();

        // Iterate through each character in the input string.
        for (int index = 0; index < inputString.length(); index++) {
            int resultLength = resultBuilder.length();

            // Skip the character if it would form a sequence of three consecutive identical characters.
            if (resultLength >= 2 
                && inputString.charAt(index) == resultBuilder.charAt(resultLength - 1) 
                && inputString.charAt(index) == resultBuilder.charAt(resultLength - 2)) {
                continue;
            }

            // Otherwise, add the character to the result.
            resultBuilder.append(inputString.charAt(index));
        }

        // Convert the StringBuilder to a string and return.
        return resultBuilder.toString();
    }
}
