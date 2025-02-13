//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            String arr[] = in.readLine().trim().split("\\s+");
            int A[] = new int[N];
            for(int i = 0;i < N;i++)
                A[i] = Integer.parseInt(arr[i]);
            int q = Integer.parseInt(in.readLine());
            int query[][] = new int[q][2];
            for(int i = 0;i < q;i++){
                String a1[] = in.readLine().trim().split("\\s+");
                int x = Integer.parseInt(a1[0]);
                int y = Integer.parseInt(a1[1]);
                query[i][0] = x;
                query[i][1] = y;
            }
            
            Solution ob = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = ob.left(N, A, q, query);
            StringBuilder ot = new StringBuilder();
            for(int i = 0;i < q;i++)
                ot.append(ans.get(i) + "\n");
            ot.deleteCharAt(ot.length()-1);
            System.out.println(ot);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class SegmentTree {
    int[] arr;
    int[] st;
    int n;
    int level;

    // Constructor for initializing the segment tree
    public SegmentTree(int[] arr) {
        this.arr = arr;
        this.n = arr.length;
        this.st = new int[4 * n];
        this.level = (int) (Math.log(n + 1) / Math.log(2));
        constructTree(0, n - 1, 0, level);  // Construct the segment tree
    }

    // Function to construct the segment tree based on the given array
    public int constructTree(int ss, int se, int i, int level) {
        // If the current segment is a single element, store it in the segment tree
        if (ss == se) {
            st[i] = arr[ss];
            return st[i];
        }
        
        // Find the middle of the current segment and recursively build the left and right subtrees
        int mid = (ss + se) / 2;
        int left = constructTree(ss, mid, 2 * i + 1, level - 1);
        int right = constructTree(mid + 1, se, 2 * i + 2, level - 1);
        
        // Apply XOR or OR based on the level
        if (level % 2 == 0)
            st[i] = left ^ right;
        else
            st[i] = left | right;
        
        return st[i];
    }

    // Function to update the value at a specific index and propagate the changes up the tree
    public int solve(int ss, int se, int i, int ind, int val, int level) {
        // If we are at the leaf node, update the value
        if (ss == se && ind == ss) {
            arr[ind] = val;
            st[i] = val;
            return val;
        }
        
        // If the current segment does not contain the index, return the current segment value
        else if (ss > ind || se < ind)
            return st[i];
        
        // Otherwise, recursively update the left and right children
        int mid = (ss + se) / 2;
        int left = solve(ss, mid, 2 * i + 1, ind, val, level - 1);
        int right = solve(mid + 1, se, 2 * i + 2, ind, val, level - 1);
        
        // Apply XOR or OR based on the level and return the updated value
        if (level % 2 == 0)
            return st[i] = (left ^ right);
        else
            return st[i] = (left | right);
    }

    // Function to find the value at a specific index after updating the array
    public int findValue(int ind, int val) {
        // If the index is out of bounds, return -1
        if (ind >= arr.length)
            return -1;
        
        // Calculate the level of the segment tree based on the array length
        int level = (int) (Math.log(arr.length + 1) / Math.log(2));
        
        // Call the solve function to find the updated value at the index
        int res = solve(0, arr.length - 1, 0, ind, val, level);
        return res;
    }
}

class Solution {
    // Function to handle multiple queries and return the results
    static List<Integer> left(int n, int arr[], int q, int query[][]) {
        List<Integer> res = new ArrayList<>();
        // Create a segment tree instance
        SegmentTree st = new SegmentTree(arr);
        
        // Process each query
        for (int[] quer : query) {
            int temp = st.findValue(quer[0], quer[1]);
            res.add(temp);
        }
        
        return res;
    }
}
