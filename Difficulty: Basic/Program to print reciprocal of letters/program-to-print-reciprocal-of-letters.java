//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String S = read.readLine();
            Solution ob = new Solution();
            String reciprocal = ob.reciprocalString(S);
            System.out.println(reciprocal);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    static String reciprocalString(String S) {
        // StringBuffer to store the modified string
        StringBuffer result = new StringBuffer();
        int length = S.length();

        // Loop through each character in the string
        for (int i = 0; i < length; i++) {
            char currentChar = S.charAt(i);

            // Check if the character is a lowercase letter
            if (currentChar >= 'a' && currentChar <= 'z') {
                int offset = currentChar - 'a';
                char reciprocalChar = (char) ('z' - offset);
                result.append(reciprocalChar);
            }
            // Check if the character is an uppercase letter
            else if (currentChar >= 'A' && currentChar <= 'Z') {
                int offset = currentChar - 'A';
                char reciprocalChar = (char) ('Z' - offset);
                result.append(reciprocalChar);
            }
            // If the character is not a letter, append it as is
            else {
                result.append(currentChar);
            }
        }

        // Return the transformed string
        return result.toString();
    }
}
