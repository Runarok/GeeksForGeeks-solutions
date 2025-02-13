//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            String input_line[] = read.readLine().trim().split("\\s+");
            int Arr[] = new int[N];
            for (int i = 0; i < N; i++)
                Arr[i] = Integer.parseInt(input_line[i]);
            String[] input = new String[2];
            input = read.readLine().split(" ");
            int L = Integer.parseInt(input[0]);
            int R = Integer.parseInt(input[1]);

            Solution ob = new Solution();
            System.out.println(ob.countTriplets(Arr, N, L, R));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int countTriplets(int Arr[], int N, int L, int R) {
        // Sorting the array to facilitate two-pointer approach
        Arrays.sort(Arr);
        
        // Count of triplets with sum less than L
        int countLessThanL = 0;
        // Count of triplets with sum less than or equal to R
        int countLessThanOrEqualToR = 0;

        // Finding triplets with sum < L
        for (int i = 0; i < N - 2; i++) {
            int left = i + 1;
            int right = N - 1;
            while (left < right) {
                if (Arr[i] + Arr[left] + Arr[right] < L) {
                    countLessThanL += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }

        // Finding triplets with sum ≤ R
        for (int i = 0; i < N - 2; i++) {
            int left = i + 1;
            int right = N - 1;
            while (left < right) {
                if (Arr[i] + Arr[left] + Arr[right] <= R) {
                    countLessThanOrEqualToR += right - left;
                    left++;
                } else {
                    right--;
                }
            }
        }

        // The valid triplet count is the difference of the two counts
        return countLessThanOrEqualToR - countLessThanL;
    }
}
