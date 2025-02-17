//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());

        while(t-- > 0){
            String S = sc.nextLine();
            Solution ob = new Solution();
            List<String> ans = ob.splitString(S);
            for (String val: ans) 
                if(val == "")
                    System.out.println(-1); 
                else    
                    System.out.println(val); 
        
System.out.println("~");
}
    } 
} 


// } Driver Code Ends

// User function Template for Java

class Solution 
{ 
    static List<String> splitString(String S) 
    { 
        StringBuilder letters = new StringBuilder();
        StringBuilder digits = new StringBuilder();
        StringBuilder specialChars = new StringBuilder();

        char[] ch = S.toCharArray();

        // Loop through each character in the string
        for (int i = 0; i < ch.length; i++) {
            if (Character.isLetter(ch[i])) {
                letters.append(ch[i]);  // Collect letters
            }
            else if (Character.isDigit(ch[i])) {
                digits.append(ch[i]);  // Collect digits
            }
            else {
                specialChars.append(ch[i]);  // Collect special characters
            }
        }

        // Return the parts, if any of them are empty return "-1"
        String letterPart = letters.length() > 0 ? letters.toString() : "-1";
        String digitPart = digits.length() > 0 ? digits.toString() : "-1";
        String specialPart = specialChars.length() > 0 ? specialChars.toString() : "-1";

        // Return a list of the 3 parts
        return Arrays.asList(letterPart, digitPart, specialPart);
    }
}
