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
            String St[] = read.readLine().split(" ");
            
            int X = Integer.parseInt(St[0]);
            int S = Integer.parseInt(St[1]);
            int M = Integer.parseInt(St[2]);
            int L = Integer.parseInt(St[3]);
            int CS = Integer.parseInt(St[4]);
            int CM = Integer.parseInt(St[5]);
            int CL = Integer.parseInt(St[6]);

            Solution ob = new Solution();
            System.out.println(ob.getPizza(X,S,M,L,CS,CM,CL));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int getPizza(int X, int S, int M, int L, int CS, int CM, int CL) {
        // dp[i] represents the minimum cost to get exactly 'i' square units of pizza
        int dp[] = new int[X + 1];

        // Initialize dp array with a large value (infinity equivalent)
        Arrays.fill(dp, Integer.MAX_VALUE);
        
        // Base case: cost to get 0 units of pizza is 0
        dp[0] = 0;

        // Iterate through each possible pizza size
        for (int i = 0; i <= X; i++) {
            if (dp[i] == Integer.MAX_VALUE) {
                continue; // Skip unreachable states
            }

            // Try adding Small pizza
            if (i + S <= X) {
                dp[i + S] = Math.min(dp[i + S], dp[i] + CS);
            } else {
                dp[X] = Math.min(dp[X], dp[i] + CS);
            }

            // Try adding Medium pizza
            if (i + M <= X) {
                dp[i + M] = Math.min(dp[i + M], dp[i] + CM);
            } else {
                dp[X] = Math.min(dp[X], dp[i] + CM);
            }

            // Try adding Large pizza
            if (i + L <= X) {
                dp[i + L] = Math.min(dp[i + L], dp[i] + CL);
            } else {
                dp[X] = Math.min(dp[X], dp[i] + CL);
            }
        }

        // Return the minimum cost to get exactly X square units of pizza
        return dp[X];
    }
};
