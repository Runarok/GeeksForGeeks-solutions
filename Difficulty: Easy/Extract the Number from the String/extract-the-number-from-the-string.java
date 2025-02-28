//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.util.regex.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            Solution ob = new Solution();
            System.out.println(ob.ExtractNumber(S));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    long ExtractNumber(String sentence) {
        // Initialize the maximum number found to -1 (indicating no valid number found initially)
        long maxNumber = -1;

        // Split the sentence into words using space as the delimiter
        String[] words = sentence.split(" ");

        // Iterate through each word in the sentence
        for (String word : words) {
            // Check if the word is entirely numeric (consists only of digits) and does not contain the digit '9'
            if (word.matches("\\d+") && !word.contains("9")) {
                // Convert the numeric word to a long integer
                long number = Long.parseLong(word);
                // Update the maximum number if the current number is larger
                maxNumber = Math.max(maxNumber, number);
            }
        }

        // Return the maximum valid number found (or -1 if none found)
        return maxNumber;
    }
}
