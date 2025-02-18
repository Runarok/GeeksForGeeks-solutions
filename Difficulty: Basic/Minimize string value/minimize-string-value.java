//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            
            String input[] = read.readLine().split(" ");
            String s = input[0];
            int k = Integer.parseInt(input[1]);
            Solution ob = new Solution();
            System.out.println(ob.minValue(s,k));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    int minValue(String S, int K) {
        // Array to store the frequency of each character (26 lowercase letters)
        int frequency[] = new int[26];

        // Count the frequency of each character in the string
        for (char c : S.toCharArray()) {
            frequency[c - 'a']++;
        }

        // Sort the frequency array in ascending order
        Arrays.sort(frequency);

        // Reduce the highest frequency characters K times
        int index = frequency.length - 1;
        while (K > 0 && index >= 0) {
            if (frequency[index] > 0) {
                frequency[index]--; // Reduce the highest frequency character
                Arrays.sort(frequency); // Re-sort to keep the highest frequency at the end
                K--;
            } else {
                index--; // Move to the next highest frequency character
            }
        }

        // Compute the sum of squares of remaining frequencies
        int sum = 0;
        for (int f : frequency) {
            sum += f * f;
        }

        // Return the minimized sum of squares
        return sum;
    }
}
