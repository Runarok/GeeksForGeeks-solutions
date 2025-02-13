//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            String T = read.readLine();

            Solution ob = new Solution();
            System.out.println(ob.checkCompressed(S,T));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if T is a valid compressed version of S
    static int checkCompressed(String S, String T) {
        
        int i = 0;  // Pointer for S
        int j = 0;  // Pointer for T
        
        // Loop through both strings
        while (i < S.length() && j < T.length()) {
           char c = S.charAt(i);  // Current character in S
           char ch = T.charAt(j); // Current character in T
           
           // If characters match, move both pointers forward
           if (c == ch) {
               i++;
               j++;
           }
           // If character in T is a digit, handle repetition
           else if (Character.isDigit(ch)) {
               String temp = "";
               
               // Extract the full number (which may have multiple digits)
               while (j < T.length() && Character.isDigit(T.charAt(j))) {
                   temp += T.charAt(j);
                   j++;
               }
               
               // Add the parsed number to i (representing repetition of characters)
               i += Integer.parseInt(temp);
           }
           // If none of the above conditions match, return 0 (invalid case)
           else {
               return 0;
           }
        }
        
        // If both strings are fully processed, return 1, else return 0
        if (i == S.length() && j == T.length()) return 1;
        else return 0;
    }
}
