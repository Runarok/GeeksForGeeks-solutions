//{ Driver Code Starts
// Initial template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        while (t-- > 0) {
            String S = in.next();
            int L = in.nextInt();
            int R = in.nextInt();
            Solution ob = new Solution();

            System.out.println(ob.javaSub(S, L, R));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function template for Java

class Solution {
    static String javaSub(String S, int L, int R) {
        // Initialize an empty string to store the result
        String st = "";
        
        // Loop through the specified range (from L to R, inclusive)
        for (int i = L; i <= R; i++) {
            // Append the character at index i to the result string
            st = st + S.charAt(i);
        }
        
        // Return the resulting substring
        return st;
    }
}
