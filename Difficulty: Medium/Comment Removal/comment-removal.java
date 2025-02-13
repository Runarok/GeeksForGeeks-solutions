//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            String code = read.readLine().trim();
            Solution ob = new Solution();
            String ans = ob.removeComments(code); 
            System.out.println(ans);
        }
    } 
} 
// } Driver Code Ends


// User function template for Java

class Solution { 
    String removeComments(String code) { 
        String result = "";
        
        for (int i = 0; i < code.length(); ) {
            // Single-line comment detection
            if (code.charAt(i) == '/' && i + 1 < code.length() && code.charAt(i + 1) == '/') {
                while (i < code.length() - 1 && !(code.charAt(i) == '\\' && code.charAt(i + 1) == 'n')) {
                    i++;
                }
                i += 2; // Skip over '\n'
            } 
            // Multi-line comment detection
            else if (code.charAt(i) == '/' && i + 1 < code.length() && code.charAt(i + 1) == '*') {
                while (i < code.length() - 1 && !(code.charAt(i) == '*' && code.charAt(i + 1) == '/')) {
                    i++;
                }
                i += 2; // Skip over '*/'
            } 
            // Normal characters
            else {
                result += code.charAt(i);
                i++;
            }
        }
        
        return result;
    }
}
