//{ Driver Code Starts
//Initial Template for Java



import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            inputLine = br.readLine().trim().split(" ");
            int n = Integer.parseInt(inputLine[0]);
            int m = Integer.parseInt(inputLine[1]);
            int[][] arr = new int[n][m];
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < m; j++) {
                    arr[i][j] = Integer.parseInt(inputLine[i * m + j]);
                }
            }
            inputLine = br.readLine().trim().split(" ");
            int x1 = Integer.parseInt(inputLine[0]);
            int y1 = Integer.parseInt(inputLine[1]);
            int x2 = Integer.parseInt(inputLine[2]);
            int y2 = Integer.parseInt(inputLine[3]);

            long ans = new Solution().subMatrixSum(arr, n, m, x1, y1, x2, y2);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the sum of elements in the sub-matrix defined by (x1, y1) to (x2, y2)
    long subMatrixSum(int arr[][], int n, int m, int x1, int y1, int x2, int y2) {
        
        long sum = 0;

        // Traverse the matrix within the given boundaries and accumulate the sum
        for (int row = x1 - 1; row <= x2 - 1; row++) {
            for (int col = y1 - 1; col <= y2 - 1; col++) {
                sum = sum + arr[row][col];
            }
        }
        
        return sum;
    }
}
