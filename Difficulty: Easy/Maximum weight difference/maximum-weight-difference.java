//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;

            int k = Integer.parseInt(br.readLine());
            // Create Solution object and find closest sum
            Solution ob = new Solution();
            long ans = ob.MaxWeightDiff(arr, k);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public long MaxWeightDiff(int[] arr, int k) {
        // Get the length of the array
        int n = arr.length;

        // Sort the array to arrange elements in ascending order
        Arrays.sort(arr);

        // Initialize variables to store the sums
        long sum = 0, sum1 = 0, sum2 = 0;

        // Calculate the sum of the entire array
        for (int i = 0; i < n; i++) {
            sum += arr[i];
        }

        // Calculate the sum of the first k elements
        for (int i = 0; i < k; i++) {
            sum1 += arr[i];
        }

        // Calculate the sum of the last k elements
        for (int i = n - k; i < n; i++) {
            sum2 += arr[i];
        }

        // Return the maximum of the two possible weight differences
        return Math.max(Math.abs(sum1 - (sum - sum1)), Math.abs(sum2 - (sum - sum2)));
    }
}
