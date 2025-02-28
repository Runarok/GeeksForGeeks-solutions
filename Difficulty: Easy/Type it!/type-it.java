//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out=new PrintWriter(System.out);
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String s = read.readLine().trim();
            Solution ob = new Solution();
            int ans = ob.minOperation(s);
            out.println(ans);
        
out.println("~");
}
        out.close();
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    int minOperation(String inputString) {
        int length = inputString.length();
        int minimumOperations = length; // Worst case: removing all characters one by one

        // Check for repeating prefixes
        for (int prefixLength = 1; prefixLength <= length / 2; prefixLength++) {

            // Compare the prefix with the next segment of the same length
            if (inputString.substring(0, prefixLength).equals(inputString.substring(prefixLength, 2 * prefixLength))) {
                
                // Calculate operations if this repeating pattern is found
                minimumOperations = Math.min(minimumOperations, prefixLength + 1 + (length - 2 * prefixLength));
            }
        }

        // Return the minimum operations required
        return minimumOperations;
    }
}
