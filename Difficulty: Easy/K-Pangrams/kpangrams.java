//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine().trim());
        while (t-- > 0) {
            String str = sc.nextLine();
            int k = Integer.parseInt(sc.nextLine().trim());
            Solution obj = new Solution();
            if (obj.kPangram(str, k))
                System.out.println("true");
            else
                System.out.println("false");
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    boolean kPangram(String str, int k) {
        // Create a Set to store unique characters (ignoring spaces)
        Set<Character> uniqueChars = new HashSet<>();
        StringBuffer sb = new StringBuffer(); // StringBuffer to store non-space characters
        
        // Traverse the string and add non-space characters to the Set and StringBuffer
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ' ') { 
                uniqueChars.add(str.charAt(i));
                sb.append(str.charAt(i));
            }
        }
        
        // Check if the string has at least 26 unique characters or if we can add enough characters
        // to make it a pangram with the given 'k' extra characters
        if (uniqueChars.size() >= 26 || (sb.length() >= 26 && k >= 26 - uniqueChars.size())) {
            return true;
        }
        
        return false;
    }
}
