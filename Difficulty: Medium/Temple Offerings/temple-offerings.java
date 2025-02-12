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
            String a[] = in.readLine().trim().split("\\s+");
            int arr[] = new int[N];
            for(int i = 0; i < N;i++)
                arr[i] = Integer.parseInt(a[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.offerings(N, arr));
        }
    }
}
// } Driver Code Ends

class Solution {
    int offerings(int N, int arr[]) {
        // code here
        if (N == 0) {
            return 0;
        }

        // Arrays to store left and right traversal offerings
        int[] left = new int[N];
        int[] right = new int[N];

        // Initialize all offerings to 1
        for (int i = 0; i < N; i++) {
            left[i] = 1;
            right[i] = 1;
        }

        // Left-to-right pass
        for (int i = 1; i < N; i++) {
            if (arr[i] > arr[i - 1]) {
                left[i] = left[i - 1] + 1;
            }
        }

        // Right-to-left pass
        for (int i = N - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1]) {
                right[i] = right[i + 1] + 1;
            }
        }

        // Calculate the total offerings by taking the max from both arrays
        int totalOfferings = 0;
        for (int i = 0; i < N; i++) {
            totalOfferings += Math.max(left[i], right[i]);
        }

        return totalOfferings;
    }
}
