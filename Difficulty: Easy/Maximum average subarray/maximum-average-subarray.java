//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

public class GFG {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            inputLine = br.readLine().trim().split(" ");
            int k = Integer.parseInt(inputLine[0]);
            inputLine = br.readLine().trim().split(" ");
            int n = Integer.parseInt(inputLine[0]);
            int[] arr = new int[n];
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }

            int ans = new Solution().findMaxAverage(arr, n, k);
            for(int i=ans; i<ans+k; i++)
                System.out.print(arr[i]+" ");
            System.out.println();
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    int findMaxAverage(int[] arr, int n, int k) {
        int startIndex = 0; // This will store the starting index of the subarray with the max average
        float currentSum = 0; // Current sum of the first 'k' elements

        // Calculate sum of first window of size 'k'
        for (int i = 0; i < k; i++) {
            currentSum += arr[i];
        }

        // Initialize max average with first window average
        float maxAverage = currentSum / k;

        // Use sliding window to check all other windows of size 'k'
        for (int i = k, j = 0; i < n; i++, j++) {
            // Slide window: remove arr[j] and add arr[i]
            currentSum = currentSum + arr[i] - arr[j];

            // Calculate new average
            float newAverage = currentSum / k;

            // Update max average and starting index if new average is greater
            if (newAverage > maxAverage) {
                maxAverage = newAverage;
                startIndex = j + 1;
            }
        }

        return startIndex;
    }
}
