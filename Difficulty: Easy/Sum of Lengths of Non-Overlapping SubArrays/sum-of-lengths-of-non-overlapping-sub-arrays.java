//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume the newline character

        while (t-- > 0) {
            List<Integer> arr = new ArrayList<>();
            String input = sc.nextLine();
            String[] tokens = input.split(" ");

            for (String token : tokens) {
                arr.add(Integer.parseInt(token));
            }

            int k = sc.nextInt();
            sc.nextLine(); // Consume the newline character

            Solution ob = new Solution();
            System.out.println(ob.calculateMaxSumLength(arr, k));
        }

        sc.close();
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int calculateMaxSumLength(List<Integer> arr, int k) {
        int n = arr.size();  // Total number of elements in the list.
        int maxSumLength = 0;  // To keep track of total valid segment length.
        int segmentStart = 0;  // Start index of a potential valid segment.

        // Loop through the list to find all valid segments.
        while (segmentStart < n) {
            // Skip elements greater than k, as they cannot be part of a valid segment.
            while (segmentStart < n && arr.get(segmentStart) > k) {
                segmentStart++;
            }

            // Current segment starts at segmentStart.
            int segmentEnd = segmentStart;
            boolean containsK = false;  // Flag to check if segment contains 'k'.

            // Expand the segment as long as elements are <= k.
            while (segmentEnd < n && arr.get(segmentEnd) <= k) {
                if (arr.get(segmentEnd) == k) {
                    containsK = true;  // Found 'k' inside this segment.
                }
                segmentEnd++;
            }

            // Only add the segment length if 'k' is present in it.
            if (containsK) {
                maxSumLength += (segmentEnd - segmentStart);
            }

            // Move segmentStart to segmentEnd to look for the next segment.
            segmentStart = segmentEnd;
        }

        return maxSumLength;  // Return the total valid segment length.
    }
}
