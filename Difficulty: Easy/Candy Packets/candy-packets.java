//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            long N = Long.parseLong(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.countPackets(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count the number of packets based on the condition
    static long countPackets(long N) {
        long count = 0;
        
        // Loop to find the maximum power of 2 that is less than or equal to N
        while (Math.pow(2, count) <= N) {
            count++;  // Increment count for each valid power of 2
        }
        
        // Return the final count
        return count;
    }
}
