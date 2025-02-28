//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine().trim());
        while(t-- > 0){
            String Str = sc.nextLine().trim();
            Solution obj = new Solution();
            System.out.println(obj.transform(Str));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution 
{ 
    // Function to transform the given string by removing vowels, 
    // replacing non-vowels with '#', and flipping case.
    String transform(String Str) 
    {
        StringBuilder transformedString = new StringBuilder();
        String vowels = "aeiouAEIOU";
        
        // Iterate through each character in the input string.
        for (int i = 0; i < Str.length(); i++) {
            char currentChar = Str.charAt(i);
            
            // Skip vowels.
            if (!vowels.contains(String.valueOf(currentChar))) {
                transformedString.append("#");
                
                // Flip case: lowercase to uppercase and vice versa.
                if (Character.isLowerCase(currentChar)) {
                    transformedString.append(Character.toUpperCase(currentChar));
                } else {
                    transformedString.append(Character.toLowerCase(currentChar));
                }
            }
        }
        
        // If the transformed string is empty, return "-1".
        return transformedString.length() == 0 ? "-1" : transformedString.toString();
    }
}
