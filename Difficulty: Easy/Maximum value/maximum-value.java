//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(reader.readLine().trim());

        while (t-- > 0) {
            String[] input = reader.readLine().trim().split("\\s+");
            int[] arr = Arrays.stream(input).mapToInt(Integer::parseInt).toArray();
            Solution ob = new Solution();
            System.out.println(ob.findMaxValue(arr));
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

class Solution {
    public int findMaxValue(int[] arr) {
        // Code here
        int n = arr.length;

        // If the array size is less than 4, return -1 as we can't compute the result
        if (n < 4) {
            return -1;
        }

        // We create 4 DP tables for storing intermediate values
        int table1[] = new int[n + 1];
        int table2[] = new int[n];
        int table3[] = new int[n - 1];
        int table4[] = new int[n - 2];

        // Initialize all tables to minus Infinity
        Arrays.fill(table1, Integer.MIN_VALUE);
        Arrays.fill(table2, Integer.MIN_VALUE);
        Arrays.fill(table3, Integer.MIN_VALUE);
        Arrays.fill(table4, Integer.MIN_VALUE);

        // table1[] stores the maximum value of arr[l]
        for (int i = n - 1; i >= 0; i--) {
            table1[i] = Math.max(table1[i + 1], arr[i]);
        }

        // table2[] stores the maximum value of arr[l] - arr[k]
        for (int i = n - 2; i >= 0; i--) {
            table2[i] = Math.max(table2[i + 1], table1[i + 1] - arr[i]);
        }

        // table3[] stores the maximum value of arr[l] - arr[k] + arr[j]
        for (int i = n - 3; i >= 0; i--) {
            table3[i] = Math.max(table3[i + 1], table2[i + 1] + arr[i]);
        }

        // table4[] stores the maximum value of arr[l] - arr[k] + arr[j] - arr[i]
        for (int i = n - 4; i >= 0; i--) {
            table4[i] = Math.max(table4[i + 1], table3[i + 1] - arr[i]);
        }

        // Return the result from table4[0], which contains the desired maximum value
        return table4[0];
    }
}
