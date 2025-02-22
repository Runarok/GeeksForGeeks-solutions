//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            String S = read.readLine();

            Solution ob = new Solution();
            
            System.out.println(ob.snakeCase(S,n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to convert a string to snake_case
    static String snakeCase(String S , int n) {
        StringBuilder result = new StringBuilder(); // Initialize a StringBuilder to build the result

        // Loop through each character in the string
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);

            // Convert uppercase letters to lowercase
            if (Character.isUpperCase(c)) {
                result.append(Character.toLowerCase(c));
            }
            // Replace spaces with underscores
            else if (c == ' ') {
                result.append('_');
            }
            // Append other characters as they are
            else {
                result.append(c);
            }
        }

        // Return the final snake_case string
        return result.toString();
    }
}
