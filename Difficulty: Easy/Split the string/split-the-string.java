//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

// } Driver Code Ends

//User function Template for Java
class Solution {
    static int isPossible(String S) {
        // If the length of the string is less than 8, check further criteria
        if (S.length() < 8) {
            // Use a HashSet to find the number of distinct characters in the string
            HashSet<Character> uniqueCharacters = new HashSet<>();
            
            // Add each character to the set
            for (char c : S.toCharArray()) {
                uniqueCharacters.add(c);
            }
            
            // If there are fewer than 4 distinct characters, return 0 (not possible)
            if (uniqueCharacters.size() < 4) {
                return 0;
            }
        }
        // If the string meets the length and/or uniqueness criteria, return 1 (possible)
        return 1;
    }
}



//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String s = read.readLine();
            
            Solution ob = new Solution();
            System.out.println(ob.isPossible(s));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends