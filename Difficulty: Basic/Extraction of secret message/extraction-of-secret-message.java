//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GFG{
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());
        while(t > 0){
            // string input
            String S = sc.nextLine();
            // function call
            Solution ob = new Solution();
            String ans = ob.ExtractMessage(S);
            System.out.print(ans);
            System.out.println();
            t--;
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution 
{ 
    // Function to extract message by removing occurrences of "LIE"
    String ExtractMessage(String S) 
    { 
        // Replace "LIE" with a space and then remove extra spaces between words
        return S.replaceAll("LIE", " ")
                .replaceAll("\\s+", " ")  // Replace multiple spaces with a single space
                .trim();  // Remove leading and trailing spaces
    }
}  
