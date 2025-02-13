//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String s = br.readLine().trim();
            String []S = s.split(" ");
            int N = Integer.parseInt(S[0]);
            int start_x = Integer.parseInt(S[1]);
            int start_y = Integer.parseInt(S[2]);
            int step = Integer.parseInt(S[3]);
            Solution ob = new Solution();
            double ans = ob.findProb(N, start_x, start_y, step);
            System.out.println(String.format("%.6f", ans));           
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    double findProb(int N, int x, int y, int K) {
        // Directions the knight can move (8 possible moves)
        int[][] directions = {{-2, -1}, {-2, 1}, {-1, -2}, {-1, 2}, {1, -2}, {1, 2}, {2, -1}, {2, 1}};
        
        // Initialize dp array, where dp[k][i][j] holds the probability after k moves at position (i, j)
        double[][][] dp = new double[K + 1][N][N];
        
        // Initial position has probability 1 (starting point)
        dp[0][x][y] = 1.0;

        // Loop through all moves from 1 to K
        for (int k = 1; k <= K; k++) {
            // Iterate through every cell in the board
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    // If there's a probability to move from this position
                    if (dp[k - 1][i][j] > 0) {
                        // Check all possible knight moves
                        for (int[] dir : directions) {
                            int ni = i + dir[0];
                            int nj = j + dir[1];
                            
                            // Check if the new position is within bounds
                            if (ni >= 0 && ni < N && nj >= 0 && nj < N) {
                                // Add the probability to the new position
                                dp[k][ni][nj] += dp[k - 1][i][j] / 8.0;
                            }
                        }
                    }
                }
            }
        }

        // Calculate the total probability of the knight being within the board after K moves
        double prob = 0.0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                prob += dp[K][i][j];
            }
        }

        // Return the total probability
        return prob;
    }
}
