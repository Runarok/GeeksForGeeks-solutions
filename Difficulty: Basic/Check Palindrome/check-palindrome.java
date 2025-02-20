//{ Driver Code Starts
// Initial Template for Java

import java.io.*;

class GFG {

    
// } Driver Code Ends

// User function Template for Java

// Function to check if a string is a palindrome
// Returns true if the given string is a palindrome, otherwise false
public static boolean isPalindrome(String s) {
    // Convert string to uppercase to ensure case insensitivity
    String normalizedString = s.toUpperCase();
    
    int start = 0;
    int end = normalizedString.length() - 1;
    
    // Iterate while comparing characters from both ends
    while (start < end) {
        if (normalizedString.charAt(start) != normalizedString.charAt(end)) {
            return false; // Not a palindrome
        }
        start++;
        end--;
    }
    
    return true; // If loop completes, it's a palindrome
}


//{ Driver Code Starts.

    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {

            String s = read.readLine().trim();

            boolean palindrome = isPalindrome(s);
            if (palindrome)
                System.out.println("True");
            else
                System.out.println("False");

            System.out.println("~");
        }
    }
}
// } Driver Code Ends