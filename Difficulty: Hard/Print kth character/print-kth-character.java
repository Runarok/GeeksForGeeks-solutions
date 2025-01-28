//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S = read.readLine();
            int K = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.PrintKthCharacter(S, K));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

class Solution {
    // Main method to print the Kth character in the suffix array structure
    public char PrintKthCharacter(String S, int K) {
        // Get the length of the string
        int n = S.length();

        // Generate the suffix array of the string S
        int[] sa = suffixArray(S);

        // Generate the LCP (Longest Common Prefix) array for the string S
        int[] lcp = lcpArray(S, sa);

        // Initialize the index i to 0, used for traversing the suffix array
        int i = 0;

        // Loop to find the Kth character by adjusting K with the number of substrings
        // covered by the LCP array and suffix array
        while (i < n && K - sum(lcp[i] + 1, n - sa[i]) > 0) {
            // Reduce K by the number of substrings before the ith suffix
            K -= sum(lcp[i] + 1, n - sa[i]);
            i++; // Move to the next suffix
        }

        // If we've reached the end of the suffix array, return an invalid character (-1)
        if (i == n) {
            return (char)-1;
        }

        // Calculate the starting position of the current substring (based on LCP value)
        int r = lcp[i] + 1;

        // Adjust K within the valid range for the current suffix
        while (K > r) {
            K -= r++; // Increment r as we move forward in the substring length
        }

        // Return the Kth character in the corresponding suffix
        return S.charAt(sa[i] + K - 1);
    }

    // Helper function to calculate the sum of lengths of substrings
    private int sum(int l, int r) {
        return (r - l + 1) * (l + r) / 2; // Sum of an arithmetic sequence from l to r
    }

    // Helper function to generate the suffix array of the string
    private int[] suffixArray(String str) {
        int n = str.length() + 1; // Add an extra for the string's null terminator
        int[] arr = new int[n]; // Array to store the suffix indices
        int[] rank = new int[n]; // Array to store ranks of suffixes
        int[] newRank = new int[n]; // Array to store updated ranks
        int[] newArr = new int[n]; // Array for new order after sorting

        // Initialize the rank array where each suffix is ranked by the first character
        for (int i = 0; i < n - 1; i++) {
            rank[arr[i] = i] = str.charAt(i); // Assign rank based on first character
        }
        rank[arr[n - 1] = n - 1] = 0; // Assign rank to the null terminator

        // Perform sorting of suffixes using their ranks
        sort(rank, arr, newArr, n, 123);

        // Iterate over suffix lengths in powers of 2 to refine the rank
        for (int shift = 1; shift <= n; shift <<= 1) {
            newRank[arr[0]] = 0; // Initialize new rank array
            for (int i = 1; i < n; i++) {
                // Compare suffixes based on their first half and second half after shifting
                newRank[arr[i]] = newRank[arr[i - 1]];
                if (rank[arr[i]] != rank[arr[i - 1]] ||
                    rank[(arr[i] + shift / 2) % n] != rank[(arr[i - 1] + shift / 2) % n]) {
                    ++newRank[arr[i]]; // Increment rank if different
                }
            }

            // Update rank array
            rank = newRank.clone();

            // Reorder suffixes for the next round of sorting based on shift value
            for (int i = 0; i < n; i++) {
                arr[i] = (arr[i] - shift + n) % n; // Recalculate suffix indices
            }

            // Perform sorting again based on the updated ranks
            sort(rank, arr, newArr, n, n);
        }

        // Return the suffix array excluding the last element (null terminator)
        return Arrays.copyOfRange(arr, 1, n);
    }

    // Helper function to perform sorting based on ranks of suffixes
    private void sort(int[] rank, int[] arr, int[] newArr, int n, int charBound) {
        int[] count = new int[charBound]; // Count array for frequency of ranks
        int[] pos = new int[charBound];   // Position array for placing ranks

        // Count frequency of each rank
        for (int r : rank) {
            count[r]++;
        }

        // Calculate the position of each rank for sorting
        for (int i = 1; i < charBound; i++) {
            pos[i] = pos[i - 1] + count[i - 1];
        }

        // Rearrange suffixes based on the calculated positions
        for (int x : arr) {
            newArr[pos[rank[x]]++] = x;
        }

        // Copy the sorted array back to the original array
        System.arraycopy(newArr, 0, arr, 0, n);
    }

    // Helper function to generate the LCP (Longest Common Prefix) array for suffixes
    private int[] lcpArray(String str, int[] sa) {
        int n = sa.length;
        int[] lcp = new int[n]; // LCP array to store the longest common prefixes
        int[] rank = new int[n]; // Array to store the rank of each suffix

        // Initialize rank array based on the suffix array
        for (int i = 0; i < n; i++) {
            rank[sa[i]] = i;
        }

        // Calculate the LCP array by comparing each suffix with its previous suffix
        for (int i = 0, k = 0; i < n; i++, k -= k > 0 ? 1 : 0) {
            if (rank[i] > 0) {
                int j = sa[rank[i] - 1]; // Get the previous suffix index
                // Count common characters between suffixes
                while (i + k < str.length() && j + k < str.length() && str.charAt(i + k) == str.charAt(j + k)) {
                    ++k; // Increment length of common prefix
                }
                lcp[rank[i]] = k; // Store LCP length for the current suffix
            }
        }

        // Return the LCP array
        return lcp;
    }
}
