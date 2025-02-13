//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split("\\s+");
            int  N = Integer.parseInt(input_line[0]);
            int  K = Integer.parseInt(input_line[1]);
            
            Solution obj = new Solution();
            ArrayList<Integer> ans = new ArrayList<Integer>();
            ans = obj.coinsGame(N, K);
            for(int  i:ans)
                System.out.print(i + " ");
            System.out.println();
            
        }
    }
}


// } Driver Code Ends

class Solution {

    /**
     * Function to simulate the coin game and return the resulting arrangement.
     * @param N - The total number of coins initially.
     * @param K - The total number of positions to be filled.
     * @returns ArrayList<Integer> - The final state of the game.
     */
    ArrayList<Integer> coinsGame(int N, int K) {
        // Initialize the result list with `K` positions, all set to 0 initially.
        ArrayList<Integer> ans = new ArrayList<Integer>();
        
        // Initialize the first position with N coins
        for (int i = 0; i < K; i++) {
            ans.add(0);
        }
        ans.set(0, N);  // First position gets the initial N coins

        // Update the array based on the rules of the game
        for (int i = 1; i < K; i++) {
            if (i % 2 == 0) {
                // If the current position index is even
                ans.set(0, N - 1);  // Reduce the coins in the first position by 1
                ans.set(i, 1);  // Place 1 coin at the current position
                N--;  // Decrease the number of available coins
            }
        }

        // Return the final arrangement
        return ans;
    }
}
