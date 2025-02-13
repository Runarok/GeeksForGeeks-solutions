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
            int n = Integer.parseInt(br.readLine().trim());
            int[] nums = new int[n];
            String[] s2 = br.readLine().trim().split(" ");
            for(int i = 0; i < n; i++){
                nums[i] = Integer.parseInt(s2[i]);
            }
            int q = Integer.parseInt(br.readLine().trim());
            int[][] Query = new int[q][2];
            for(int i = 0; i < q; i++){
                String[] s3 = br.readLine().trim().split(" ");
                int[] temp = new int[2];
                for(int j = 0; j < 2; j++)
                    temp[j] = Integer.parseInt(s3[j]);
                Query[i] = temp;
            }
            Solution obj = new Solution();
            int[] ans = obj.FindQuery(nums, Query);
            for(int i = 0; i < ans.length; i++)
                System.out.println(ans[i]);

        }
    }
}


// } Driver Code Ends


// User function Template for Java

class Solution {
    private static final long MOD = 1000000007;

    // Function to add two numbers with modulo
    private long add(long x, long y) {
        return ((x % MOD) + (y % MOD)) % MOD;
    }

    // Function to subtract two numbers with modulo
    private long sub(long x, long y) {
        return ((x % MOD) - (y % MOD) + MOD) % MOD;
    }

    // Function to multiply two numbers with modulo
    private long mul(long x, long y) {
        return ((x % MOD) * (y % MOD)) % MOD;
    }

    // Function to process queries based on prefix sum calculations
    public int[] FindQuery(int[] nums, int[][] query) {
        int n = nums.length;

        // Prefix sum arrays to store computed values
        long[] dp1 = new long[n + 1]; // Stores sum of elements
        long[] dp2 = new long[n + 1]; // Stores weighted sum of elements
        long[] dp3 = new long[n + 1]; // Stores weighted square sum of elements

        // Compute prefix sum arrays
        for (int i = 0; i < n; i++) {
            dp1[i + 1] = (dp1[i] + nums[i]) % MOD;
            dp2[i + 1] = add(dp2[i], mul(nums[i], i + 1));
            dp3[i + 1] = add(dp3[i], mul(mul(nums[i], i + 1), i + 1));
        }

        // Process each query
        int[] queryResult = new int[query.length];
        for (int k = 0; k < query.length; k++) {
            int l = query[k][0];
            int r = query[k][1];

            // Compute result based on prefix sums
            long ans = sub(dp3[r], dp3[l - 1]);
            ans = add(ans, mul(mul(l - 1, l - 1), sub(dp1[r], dp1[l - 1])));
            ans = sub(ans, mul(2 * (l - 1), sub(dp2[r], dp2[l - 1])));

            // Ensure result is non-negative
            ans = (ans + MOD) % MOD;

            queryResult[k] = (int) ans;
        }

        return queryResult;
    }
}
