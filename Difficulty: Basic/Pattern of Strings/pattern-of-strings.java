//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();

            Solution ob = new Solution();
            ArrayList<String> result = ob.pattern(S);
            for (String value : result) {
                System.out.println(value);
            }

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to generate a pattern by returning substrings of decreasing lengths
    ArrayList<String> pattern(String s) {
        // Create an array list to store the resulting substrings
        ArrayList<String> arr = new ArrayList<>();
        
        // Loop through the string from its length down to 1
        for (int i = s.length(); i > 0; i--) { 
            // Add the substring from the start of the string up to index i
            arr.add(s.substring(0, i));
        }
        
        // Return the array list containing the substrings
        return arr;
    }
}
