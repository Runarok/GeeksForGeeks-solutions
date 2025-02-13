//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG implements Runnable {
    public void run() {
        // everything that needs to be written in main() function should be here in
        // run() method

        // we use try in order to catch IOExceptions becuase of using BufferedReader
        // Class
        try {
            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
            int t = Integer.parseInt(in.readLine());
            while (t-- > 0) {
                int N = Integer.parseInt(in.readLine());
                int cost[][] = new int[N][3];
                for (int i = 0; i < N; i++) {
                    String a[] = in.readLine().trim().split("\\s+");
                    for (int j = 0; j < 3; j++) cost[i][j] = Integer.parseInt(a[j]);
                }

                Solution ob = new Solution();
                System.out.println(ob.minCost(N, cost));
            
System.out.println("~");
}
        } catch (Exception e) {
            System.out.println("IOException");
        }
    }

    public static void main(String[] args) throws IOException {
        // here increasing the stack size to increase the recursion limit
        // here 1 << 26 will create the stack size to 64MB that should be enough for
        // problems
        new Thread(null, new GFG(), "whatever", 1 << 26).start();
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the minimum cost to paint all houses such that no two adjacent houses have the same color
    static int minCost(int n, int cost[][]) {
        
        // Traverse the cost array from second last house to the first
        for(int i = n - 2; i >= 0; i--) {
            // For each house, calculate the minimum cost to paint it with each color (0, 1, 2)
            // The cost is the current color's cost plus the minimum of the costs of painting the next house with the other two colors
            cost[i][0] += Math.min(cost[i + 1][1], cost[i + 1][2]);
            cost[i][1] += Math.min(cost[i + 1][0], cost[i + 1][2]);
            cost[i][2] += Math.min(cost[i + 1][0], cost[i + 1][1]);
        }
        
        // Return the minimum of the costs of painting the first house with each of the three colors
        return Math.min(cost[0][0], Math.min(cost[0][1], cost[0][2]));
    }
}
