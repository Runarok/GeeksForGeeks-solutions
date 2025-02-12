//{ Driver Code Starts
import java.io.*;
import java.util.*;

class IntArray {
    public static int[] input(BufferedReader br, int n) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for (int i = 0; i < n; i++) a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a) {
        for (int e : a) System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int N;
            N = Integer.parseInt(br.readLine());

            int K;
            K = Integer.parseInt(br.readLine());

            int target;
            target = Integer.parseInt(br.readLine());

            int[] coins = IntArray.input(br, N);

            Solution obj = new Solution();
            boolean res = obj.makeChanges(N, K, target, coins);

            int _result_val = (res) ? 1 : 0;
            System.out.println(_result_val);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    public static boolean makeChanges(int N, int K, int target, int[] coins) {
        // Initialize dp array to store the results of subproblems
        // dp[i][j] will store whether it's possible to make a target i with j coins
        int[][] dp = new int[target + 1][K + 1];
        
        // Fill the dp array with -1 to indicate uncomputed values
        for (int[] i : dp) {
            Arrays.fill(i, -1);
        }
        
        // Start solving from the first coin and the given target
        return solve(target, K, coins, 0, dp);
    }

    // Recursive function to check if it's possible to make 'target' with 'K' coins
    static boolean solve(int target, int K, int[] coins, int index, int[][] dp) {
        // Base condition: if target is 0 and K is 0, then it's a valid solution
        if (target == 0 && K == 0) {
            return true;
        }

        // If target or K is negative or we've run out of coins, it's not a valid solution
        if (target < 0 || K < 0 || index >= coins.length) {
            return false;
        }

        // If the subproblem has already been computed, return the result from dp
        if (dp[target][K] != -1) {
            return dp[target][K] == 1;
        }

        // Include the current coin and try to reduce the target and K
        boolean include = solve(target - coins[index], K - 1, coins, index, dp);

        // Exclude the current coin and move to the next coin
        boolean exclude = solve(target, K, coins, index + 1, dp);

        // Store the result in dp: 1 means true, 0 means false
        dp[target][K] = (include || exclude) ? 1 : 0;

        // Return whether it's possible to make the target with K coins
        return include || exclude;
    }
}
