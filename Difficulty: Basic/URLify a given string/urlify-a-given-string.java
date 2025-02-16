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
            Solution obj = new Solution();
            System.out.println(obj.URLify(str));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    String URLify(String s) {
        // Replacing all spaces with "%20"
        return s.replace(" ", "%20");
    }
}
