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
            

            
            System.out.println(ob.Count(S));
        }
    } 
} 
// } Driver Code Ends

//User function Template for Java

class Solution {
    static int Count(String inputString) {
        // Initialize count to store number of alphabetic characters
        int alphabetCount = 0;

        // Iterate through each character in the string
        for (int index = 0; index < inputString.length(); index++) {
            char currentChar = inputString.charAt(index);
            
            // Check if the character is a letter
            if (Character.isLetter(currentChar)) {
                alphabetCount++;
            }
        }
        
        // Return the final count of alphabetic characters
        return alphabetCount;
    }
}
