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
            System.out.println(ob.crossPattern(S));
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    static String crossPattern(String S) {
        // StringBuilder to store the resulting cross pattern
        StringBuilder result = new StringBuilder();
        int length = S.length(); // Get the length of the input string
        
        // Loop through each row of the pattern
        for (int row = 0; row < length; row++) {
            // Loop through each column in the current row
            for (int col = 0; col < length; col++) {
                
                // If we are at the main diagonal (row == col), append the character at that position
                if (row == col) {
                    result.append(S.charAt(row));
                }
                // If we are at the anti-diagonal (row + col == n - 1), append the character at that position
                else if ((row + col) == length - 1) {
                    result.append(S.charAt(col));
                }
                // Otherwise, append a space to maintain the cross shape
                else {
                    result.append(" ");
                }
            }
        }
        // Return the constructed cross pattern as a string
        return result.toString();
    }
}
