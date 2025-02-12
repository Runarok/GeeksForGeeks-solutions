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
            int N = Integer.parseInt(read.readLine());
            
            String S[] = read.readLine().split(" ");
            int[] A = new int[N];
            
            for(int i=0 ; i<N ; i++)
                A[i] = Integer.parseInt(S[i]);

            Solution ob = new Solution();
            System.out.println(ob.gameOfXor(N,A));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the result of the game using XOR
    static int gameOfXor(int N, int[] A) {
        int ans = 0; // Initialize the answer variable
        
        // Iterate through the array
        for (int i = 0; i < N; i++) {
            // Calculate the frequency of each element
            int freq = (i + 1) * (N - i);
            
            // If the frequency is odd, XOR the element with the answer
            if (freq % 2 != 0) {
                ans ^= A[i];
            }
        }
        
        return ans; // Return the final answer
    }
}
