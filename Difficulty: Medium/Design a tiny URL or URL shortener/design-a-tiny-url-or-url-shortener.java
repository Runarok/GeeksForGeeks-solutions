//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            long n = Long.parseLong(br.readLine().trim());

            String url = new Solution().idToShortURL(n);
            System.out.println(url);
            System.out.println(shortURLtoID(url));
        
System.out.println("~");
}
    }

    // Function to get integer ID back from a short url
    static long shortURLtoID(String shortURL) {
        long id = 0; // initialize result

        // A simple base conversion logic
        for (int i = 0; i < shortURL.length(); i++) {
            if ('a' <= shortURL.charAt(i) && shortURL.charAt(i) <= 'z')
                id = id * 62 + shortURL.charAt(i) - 'a';
            if ('A' <= shortURL.charAt(i) && shortURL.charAt(i) <= 'Z')
                id = id * 62 + shortURL.charAt(i) - 'A' + 26;
            if ('0' <= shortURL.charAt(i) && shortURL.charAt(i) <= '9')
                id = id * 62 + shortURL.charAt(i) - '0' + 52;
        }
        return id;
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {

    private static final String CHAR_SET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private static final int BASE = CHAR_SET.length();

    // Converts a long integer ID to a short URL
    public String idToShortURL(long n) {
        StringBuilder shortURL = new StringBuilder();
        
        // Convert the ID to a base 62 number
        while (n > 0) {
            // Find the remainder when divided by the base (62)
            int remainder = (int) (n % BASE);
            
            // Append the corresponding character from the CHAR_SET
            shortURL.append(CHAR_SET.charAt(remainder));
            
            // Update n for the next iteration
            n /= BASE;
        }
        
        // Reverse the string to get the correct order for the URL
        return shortURL.reverse().toString();
    }
}
