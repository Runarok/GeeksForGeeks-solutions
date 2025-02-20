//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            String s = read.readLine();
            Solution ob = new Solution();
            int ans = ob.findLength(s);
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

// User function Template for Java
class Solution 
{ 
    int findLength(String s) 
    { 
        // Trim leading and trailing spaces from the string
        String trimmedStr = s.trim();
        int length = 0;
        
        // Traverse the string from the end to find the length of the last word
        for (int i = trimmedStr.length() - 1; i >= 0; i--) {
            if (trimmedStr.charAt(i) != ' ') {
                length++;
            } else {
                break; // Stop counting when a space is encountered
            }
        }
        return length;
    }
}
