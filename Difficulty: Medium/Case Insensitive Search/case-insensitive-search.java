//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {
    static ArrayList<Integer> search(String pat, String txt) {
        ArrayList<Integer> result = new ArrayList<>();

        // Convert both pattern and text to lowercase for case-insensitive comparison
        pat = pat.toLowerCase();
        txt = txt.toLowerCase();

        int patLength = pat.length();
        int txtLength = txt.length();

        // Iterate through the text to check for pattern matches
        for (int i = 0; i <= txtLength - patLength; i++) {
            String substring = txt.substring(i, i + patLength); // Extract substring of pattern length

            if (substring.equals(pat)) {
                result.add(i); // Store the starting index of the match
            }
        }

        return result; // Return the list of starting indices
    }
}


//{ Driver Code Starts.

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            String s, patt;
            s = sc.next();
            patt = sc.next();

            Solution ob = new Solution();

            ArrayList<Integer> res = ob.search(patt, s);
            System.out.print("[");
            for (int i = 0; i < res.size(); i++) {
                System.out.print(res.get(i));
                if (i != res.size() - 1) System.out.print(",");
            }
            System.out.println("]");
            System.out.println("~");
        }
    }
}
// } Driver Code Ends