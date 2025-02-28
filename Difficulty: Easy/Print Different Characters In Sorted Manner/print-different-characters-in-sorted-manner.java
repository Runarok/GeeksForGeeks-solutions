//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // using Scanner class to take input
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();

        sc.nextLine();
        while (t-- > 0) {
            // taking the String
            String str = sc.nextLine();

            // calling the Sorted_Characters method
            // with String as parameter and printing
            // the result
            System.out.println(Sorted_Characters(str));

            System.out.println("~");
        }
    }

    
// } Driver Code Ends

public static String Sorted_Characters(String s) {
    // Array to track presence of characters from 'a' to 'z'
    boolean[] present = new boolean[26];

    // Mark presence of characters in the string
    for (char c : s.toCharArray()) {
        present[c - 'a'] = true;
    }

    // Build result string in sorted order
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < 26; i++) {
        if (present[i]) {
            result.append((char) (i + 'a'));
        }
    }

    return result.toString();
}



//{ Driver Code Starts.
}

// } Driver Code Ends