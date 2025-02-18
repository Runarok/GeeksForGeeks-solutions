//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

// } Driver Code Ends

class Solution {
    /**
     * Function to check if there exists a string in the array
     * that differs from the given string S by exactly one character.
     * 
     * @param arr - Array of strings to be checked.
     * @param N - The number of strings in the array.
     * @param S - The string to compare against.
     * @returns String - "True" if a string with exactly one mismatch is found, otherwise "False".
     */
    static String isStringExist(String arr[], int N, String S) {
        // Iterate through each string in the array
        for (String str : arr) {
            // Check if the string has the same length and if it has only one character mismatch
            if (str.length() == S.length() && isOneMismatch(str, S)) {
                return "True"; // Return "True" if such a string is found
            }
        }
        return "False"; // Return "False" if no matching string is found
    }

    /**
     * Helper function to check if two strings differ by exactly one character.
     * 
     * @param s1 - First string.
     * @param s2 - Second string.
     * @returns boolean - True if there is exactly one mismatch, otherwise false.
     */
    private static boolean isOneMismatch(String s1, String s2) {
        int mismatchCount = 0;

        // Iterate through the characters of both strings
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                mismatchCount++;
                if (mismatchCount > 1) return false; // More than 1 mismatch
            }
        }

        // Return true if there is exactly 1 mismatch
        return mismatchCount == 1;
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
            String input_line[] = read.readLine().trim().split(" ");
            String X =read.readLine().trim();
            Solution ob = new Solution();
            System.out.println(ob.isStringExist(input_line, N, X));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends