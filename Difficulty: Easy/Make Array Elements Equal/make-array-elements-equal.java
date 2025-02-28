//{ Driver Code Starts
// Initial Template for Java

// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t =
            Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while (t-- > 0) {

            int N = Integer.parseInt(br.readLine().trim());

            Solution ob = new Solution();
            System.out.println(ob.minOperations(N));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the minimum number of operations
    public long minOperations(int N) {
        // Cast N to long to handle large numbers
        long n = (long)N;

        // Check if N is even or odd and return the appropriate result
        return (n % 2 == 0) ? (n * n / 4) : ((n * n - 1) / 4);
    }
}
