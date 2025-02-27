//{ Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args)throws IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
	    int t,i;
	    t=Integer.parseInt(br.readLine());
	    while(t-->0){
	        
	        String str=br.readLine();
	        int k=Integer.parseInt(br.readLine());
	        Solution ob = new Solution();
            System.out.println(ob.decodeIt(str, k));
            
	    
System.out.println("~");
}
	}
}
// } Driver Code Ends

class Solution {
    static char decodeIt(String str, int k) {
        int decodedLength = 0; // Total length of the decoded string
        
        // First pass: calculate total decoded length
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            
            if (Character.isDigit(ch)) {
                // If it's a digit, it means the previous segment repeats
                decodedLength *= (ch - '0');
            } else {
                // It's a letter, so just add one character to length
                decodedLength++;
            }
        }
        
        // Second pass: work backwards to find the k-th character
        for (int i = str.length() - 1; i >= 0; i--) {
            char ch = str.charAt(i);
            
            if (Character.isDigit(ch)) {
                // If it's a digit, we shrink the decoded length
                decodedLength /= (ch - '0');
                k %= decodedLength; // Position in the smaller segment
            } else {
                // It's a letter
                if (k == 0 || k == decodedLength) {
                    return ch; // Found the character at position k
                }
                decodedLength--; // Move to the next character in decoded string
            }
        }
        
        return 'a'; // This should not happen if input is valid
    }
}
