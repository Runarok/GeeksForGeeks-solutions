//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            
            String S= read.readLine();
            
            Solution ob = new Solution();
            long ans = ob.evenNumSubstring(S);
            System.out.println(ans);
        }
    } 
} 
// } Driver Code Ends

//User function Template for Java

class Solution {
    static long evenNumSubstring(String S) {
        // This variable will store the final count of valid substrings
        long count = 0;

        // Loop through each character in the string
        for (int i = 0; i < S.length(); i++) {

            // Check if the current character is an even digit
            if ((S.charAt(i) - '0') % 2 == 0) {

                // If it's even, count this as a valid substring ending here
                count++;

                // Also, add the count of substrings ending at this position,
                // which start from earlier indices
                count += i;
            }
        }

        // Return the final count
        return count;
    }
}
