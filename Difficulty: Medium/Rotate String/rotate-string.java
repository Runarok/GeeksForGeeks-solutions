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
            String inp[] = read.readLine().split(" ");
            int N = Integer.parseInt(inp[0]);
            int Q = Integer.parseInt(inp[1]);
            String S = read.readLine();
            int Q1[] = new int[Q];
            int Q2[] = new int[Q];
            for (int i = 0; i < Q; i++) {
                String s[] = read.readLine().split(" ");
                Q1[i] = Integer.parseInt(s[0]);
                Q2[i] = Integer.parseInt(s[1]);
            }
            Solution ob = new Solution();
            ArrayList<Character> ans = ob.StringQuery(N, Q, S, Q1, Q2);
            for (char u : ans) System.out.println(u);
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to process the queries on string S
    static ArrayList<Character> StringQuery(int N, int Q, String S, int Q1[], int Q2[]) {
        ArrayList<Character> list = new ArrayList<>();
        int l = 0; // Initialize the shift counter
        
        // Loop through each query
        for (int i = 0; i < Q; i++) {
            // If query type is 1, update the shift value
            if (Q1[i] == 1) {
                l += N - (Q2[i] % N); // Calculate the new shift position
            } 
            // If query type is 2, fetch the character at the shifted position
            else if (Q1[i] == 2) {
                int aim = l + Q2[i]; // Calculate the target position
                list.add(S.charAt(aim % N)); // Add the character to the result list
            }
        }
        
        return list; // Return the list of characters from query type 2
    }
}
