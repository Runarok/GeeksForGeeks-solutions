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
    // checkCompressed function to check if string T is a valid compressed form of string S
    // S: Original string
    // T: Compressed string
    static int checkCompressed(String S, String T) {
        // Initialize pointers for both strings
        int i = 0;  // Pointer for original string S
        int j = 0;  // Pointer for compressed string T
        
        // Iterate through both strings
        while (i < S.length() && j < T.length()) {
            // If characters match, move both pointers
            if (S.charAt(i) == T.charAt(j)) {
                i++;
                j++;
            } 
            // If the current character in T is a digit, handle repetition
            else if (Character.isDigit(T.charAt(j))) {
                int count = 0;
                // Calculate the complete number (repetition count) from the digits
                while (j < T.length() && Character.isDigit(T.charAt(j))) {
                    count = count * 10 + (T.charAt(j) - '0');
                    j++;
                }
                // Move the pointer in S by the repetition count
                i += count;
            } else {
                // If none of the above conditions match, return 0 (invalid compressed form)
                return 0;
            }
        }

        // If both strings are fully traversed, the compressed form is valid
        if (i == S.length() && j == T.length()) {
            return 1;
        }

        // If one of the strings is not fully traversed, return 0 (invalid compressed form)
        return 0;
    }
}
