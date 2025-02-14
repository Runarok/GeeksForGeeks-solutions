//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            Solution ob = new Solution();
            String result = ob.firstAlphabet(S);
            
            System.out.println(result);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to return the first letter of every word in the given string S
    String firstAlphabet(String S) {
        // StringBuilder to build the result string
        StringBuilder result = new StringBuilder();
        
        // Splitting the input string into words using space as a delimiter
        String[] words = S.split(" ");
        
        // Loop through each word in the array
        for (String word : words) {
            // Append the first character of each word to the result
            result.append(word.charAt(0));
        }
        
        // Return the final string which contains the first letter of each word
        return result.toString();
    }
}
