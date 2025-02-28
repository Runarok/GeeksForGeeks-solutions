//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 

class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine().trim());
        while(t-- > 0){
            String A = sc.nextLine().trim();
            String B = sc.nextLine().trim();
            Solution obj = new Solution();
            System.out.println(obj.sameChar(A, B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution { 
    int sameChar(String firstString, String secondString) {
        // Initialize pointers and count for matching characters.
        int index = 0;
        int matchingCount = 0;

        // Loop through both strings until one of them ends.
        while (index < firstString.length() && index < secondString.length()) {
            // Compare characters at the current index (case insensitive).
            if (Character.toLowerCase(firstString.charAt(index)) == 
                Character.toLowerCase(secondString.charAt(index))) {
                matchingCount++;
            }
            index++;
        }

        // Return the total count of matching characters.
        return matchingCount;
    }
}
