//{ Driver Code Starts
import java.util.*;
import java.io.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S1 = read.readLine();
            String S2 = read.readLine();
            Solution ob = new Solution();

            System.out.println(ob.conRevstr(S1, S2));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function template for Java

class Solution {
    static String conRevstr(String s1, String s2) {
        // Initialize an empty string to store the result
        String ans = "";
        
        // Loop through the second string in reverse order and append to the result
        for (int i = s2.length() - 1; i >= 0; i--) {
            ans += s2.charAt(i);
        }
        
        // Loop through the first string in reverse order and append to the result
        for (int i = s1.length() - 1; i >= 0; i--) {
            ans += s1.charAt(i);
        }

        // Return the final string after both reversals
        return ans;
    }
}
