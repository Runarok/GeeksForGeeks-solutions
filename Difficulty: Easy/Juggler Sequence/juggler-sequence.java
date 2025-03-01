//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            long n = Long.parseLong(in.readLine());

            Solution ob = new Solution();
            List<Long> ans = new ArrayList<>();
            StringBuilder out = new StringBuilder();
            ans = ob.jugglerSequence(n);
            for (int i = 0; i < ans.size(); i++) out.append(ans.get(i) + " ");
            System.out.println(out);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    
    // Function to return the juggler sequence for a given number n
    static List<Long> jugglerSequence(long n) {
        // Create a list to store the sequence
        List<Long> sequence = new ArrayList<>();
        
        // Generate the sequence by calling the helper function
        generateSequence(n, sequence);
        
        // Return the generated sequence
        return sequence;
    }

    // Recursive helper function to generate the juggler sequence
    private static void generateSequence(long n, List<Long> sequence) {
        // Add the current number to the sequence
        sequence.add(n);
        
        // If n reaches 1, stop the recursion
        if (n == 1) return;
        
        // Calculate the next number in the sequence
        long next = (n % 2 == 0) ? (long) Math.floor(Math.sqrt(n))  // For even n, take sqrt
                                 : (long) Math.floor(Math.pow(n, 1.5));  // For odd n, take n^(3/2)
        
        // Recursively generate the next number
        generateSequence(next, sequence);
    }
}
