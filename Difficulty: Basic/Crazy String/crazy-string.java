//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            String S = read.readLine();

            Solution ob = new Solution();
             
            System.out.println(ob.getCrazy(S));
        }
    } 
} 


// } Driver Code Ends

// User function Template for Java

class Solution{
    // Function to modify the string with alternating upper and lower cases based on first character's case
    static String getCrazy(String s)
    {
        // If the string is null or empty, return as is
        if (s == null || s.isEmpty()) {
            return s;
        }

        // Check if the first character is lowercase
        boolean p = Character.isLowerCase(s.charAt(0));
        
        // StringBuilder to build the modified string
        StringBuilder sb = new StringBuilder();

        // Loop through the string and alternate cases
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            // If p is true (first char is lowercase), alternate starting with lowercase
            if (p) {
                sb.append(i % 2 != 0 ? Character.toUpperCase(c) : Character.toLowerCase(c));
            } else {
                // If p is false (first char is uppercase), alternate starting with uppercase
                sb.append(i % 2 == 0 ? Character.toUpperCase(c) : Character.toLowerCase(c));
            }
        }
        
        // Return the modified string
        return sb.toString();
    }
}
