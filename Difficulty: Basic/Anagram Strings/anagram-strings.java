//{ Driver Code Starts
// Initial template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S1 = read.readLine();
            String S2 = read.readLine();
            Solution ob = new Solution();

            System.out.println(ob.areAnagram(S1, S2));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function template for Java

class Solution {
    /**
     * Function to check if two strings are anagrams.
     * @param S1 First input string.
     * @param S2 Second input string.
     * @return 1 if the strings are anagrams, otherwise 0.
     */
    static int areAnagram(String S1, String S2) {
        
        // If the lengths are different, they cannot be anagrams
        if (S1.length() != S2.length()) {
            return 0;
        }
        
        // Convert strings to character arrays for sorting
        char[] arr1 = S1.toCharArray();
        char[] arr2 = S2.toCharArray();
        
        // Sort both character arrays
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        // Compare sorted arrays; if equal, return 1 (anagrams), else return 0
        return Arrays.equals(arr1, arr2) ? 1 : 0;
    }
}
