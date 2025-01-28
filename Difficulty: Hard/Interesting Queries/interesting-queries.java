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
            String[] S = br.readLine().trim().split(" ");
            int n = Integer.parseInt(S[0]);
            int q = Integer.parseInt(S[1]);
            int k = Integer.parseInt(S[2]);
            int[] nums = new int[n];
            String[] S1 = br.readLine().trim().split(" ");
            for(int i = 0; i < n; i++)
                nums[i] = Integer.parseInt(S1[i]);
            int[][] Queries = new int[q][2];
            for(int i = 0; i < q; i++){
                String[] S3 = br.readLine().trim().split(" ");
                for(int j = 0; j < S3.length; j++){
                    Queries[i][j] = Integer.parseInt(S3[j]);
                }
            }
            Solution obj = new Solution();
            int[] ans = obj.solveQueries(nums, Queries, k);
            for(int i = 0; i < ans.length; i++)
                System.out.println(ans[i]);
        }
    }
}

// } Driver Code Ends

class Solution
{
    private static final int MAXN = 100005;
    private static final int BLOCK = 318;

    // Defining variables.
    private int[] cnt = new int[MAXN];
    private int[] a = new int[MAXN];
    private int[] ans = new int[MAXN];
    private int answer = 0;

    private static class Query {
        int L, R, i;

        Query(int L, int R, int i) {
            this.L = L;
            this.R = R;
            this.i = i;
        }
    }

    private List<Query> q = new ArrayList<>();

    // Function to compare two queries.
    private static class QueryComparator implements Comparator<Query> {
        @Override
        public int compare(Query x, Query y) {
            // Sorting queries based on their block.
            if (x.L / BLOCK != y.L / BLOCK) {
                return Integer.compare(x.L / BLOCK, y.L / BLOCK);
            }
            // If block is same, sort queries based on their end point.
            return Integer.compare(x.R, y.R);
        }
    }

    // Function to add a number to the count array and update the answer.
    private void add(int p, int k) {
        cnt[a[p]]++;
        if (cnt[a[p]] == k) {
            answer++;
        }
    }

    // Function to subtract a number from the count array and update the answer.
    private void subtract(int p, int k) {
        cnt[a[p]]--;
        if (cnt[a[p]] == k - 1) {
            answer--;
        }
    }

    // Function to solve the given queries.
    public int[] solveQueries(int[] nums, int[][] Queries, int k) {
        // Calculating size of input arrays.
        int n = nums.length;
        int m = Queries.length;

        // Initializing arrays and variables.
        Arrays.fill(a, 0);
        Arrays.fill(cnt, 0);
        answer = 0;

        // Copying elements from input arrays to necessary arrays.
        for (int i = 0; i < n; i++) {
            a[i] = nums[i];
        }
        for (int i = 0; i < m; i++) {
            q.add(new Query(Queries[i][0] - 1, Queries[i][1] - 1, i));
        }

        // Sorting queries based on blocks and end points.
        q.sort(new QueryComparator());

        // Initializing variables.
        int c_l = 0, c_r = 0, l, r;
        int[] ans = new int[m];

        // Iterating over each query and calculating the answer.
        for (Query query : q) {
            l = query.L;
            r = query.R;

            // Updating left pointer.
            while (c_l < l) {
                subtract(c_l, k);
                c_l++;
            }
            while (c_l > l) {
                add(c_l - 1, k);
                c_l--;
            }

            // Updating right pointer.
            while (c_r <= r) {
                add(c_r, k);
                c_r++;
            }
            while (c_r > r + 1) {
                subtract(c_r - 1, k);
                c_r--;
            }

            // Storing the answer for the current query.
            ans[query.i] = answer;
        }

        // Returning the final answers for all queries.
        return ans;
    }
}