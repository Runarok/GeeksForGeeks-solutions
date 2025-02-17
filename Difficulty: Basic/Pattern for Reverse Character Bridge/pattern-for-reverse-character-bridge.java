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
            int N = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            String[] S = ob.revCharBridge(N);
            
            for(int i=0; i<S.length; i++)
                System.out.println(S[i]);
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static String[] revCharBridge(int N) {
        // Array to store the resulting pattern of strings
        String patternArray[] = new String[N];

        // Character array to construct each row of the pattern
        char charArray[] = new char[N * 2 - 1];

        // Loop to construct each row of the pattern
        for (int i = 0; i < N; i++) {
            char currentChar = '@'; // Starting character before 'A'
            String rowString = "";

            // Fill the first part of the row with incrementing characters
            for (int j = 0; j < N - i; j++) {
                currentChar++;
                charArray[j] = currentChar;
            }

            // Fill the middle part of the row with spaces
            for (int j = N - i; j < N + i - 1; j++) {
                charArray[j] = ' ';
            }

            // Adjust the character for the mirrored part of the row
            currentChar--;

            // Fill the second mirrored part of the row with decrementing characters
            for (int j = N + i; j < N * 2 - 1; j++) {
                charArray[j] = currentChar;
                currentChar--;
            }

            // Convert the character array to a string and store it in the result array
            patternArray[i] = String.valueOf(charArray);
        }

        return patternArray;
    }
}
