//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());

        while(t > 0){
            String S = sc.nextLine();
            Solution ob = new Solution(); 
            System.out.println(ob.updateString(S));
            t--;
        }
    } 
} 
// } Driver Code Ends

// User function Template for Java

class Solution 
{ 
    static String updateString(String S) 
    { 
        // StringBuilder to store the final result without noise initially
        StringBuilder no = new StringBuilder();

        // StringBuilder to store all the "ada" and "da" noise sequences
        StringBuilder noise = new StringBuilder();

        int i = 0;

        // Traverse the input string
        while (i < S.length()) {
            // Check for the "ada" pattern (potential noise start)
            if (i <= S.length() - 3 && S.substring(i, i + 3).equals("ada")) {
                
                // Mark the starting position of the noise sequence
                int start = i;
                
                // Move index past "ada"
                i += 3;
                
                // Check for and include consecutive "da" sequences
                while (i <= S.length() - 2 && S.substring(i, i + 2).equals("da")) {
                    i += 2;
                }
                
                // Append the detected noise sequence to the noise StringBuilder
                noise.append(S, start, i);
                
            } else {
                // If no noise pattern is found, add the character to the result
                no.append(S.charAt(i));
                i++;
            }
        }

        // Append all collected noise at the end of the result string
        no.append(noise);

        // Return the final updated string
        return no.toString();
    }
}
