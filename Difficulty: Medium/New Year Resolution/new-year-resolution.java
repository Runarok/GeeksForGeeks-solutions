//{ Driver Code Starts
import java.io.*;
import java.util.*;


class IntArray
{
    public static int[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for(int i = 0; i < n; i++)
            a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int N;
            N = Integer.parseInt(br.readLine());
            
            
            int[] coins = IntArray.input(br, N);
            
            Solution obj = new Solution();
            boolean res = obj.isPossible(N, coins);
            
            int _result_val = (res) ? 1 : 0;
            System.out.println(_result_val);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to check if it's possible to get a sum divisible by 20, 24, or 2024
    public static boolean isPossible(int n, int[] coins) {
        // Calculate the total sum of the coins
        int sum = 0;
        for (int val : coins) sum += val;

        // Initialize the DP array where dp[i][j] means we can form sum 'j' using the first 'i' coins
        boolean[][] dp = new boolean[n + 1][sum + 1];

        // Base case: We can always form sum 0 with any number of coins
        for (int i = 0; i <= n; i++) dp[i][0] = true;

        // Fill the DP table
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= sum; j++) {
                // If the current coin is less than or equal to the current sum 'j'
                if (coins[i - 1] <= j) {
                    // Either we take the coin or we don't
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - coins[i - 1]];
                } else {
                    // We can't take the current coin, so just carry forward the previous value
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        // Check if we can form any sum that is divisible by 20, 24, or 2024
        for (int j = 1; j <= sum; j++) {
            if (dp[n][j] && (j % 20 == 0 || j % 24 == 0 || j % 2024 == 0)) return true;
        }

        // If no such sum is found, return false
        return false;
    }
}
