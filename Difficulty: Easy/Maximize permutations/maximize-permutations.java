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
            String S[] = read.readLine().trim().split("\\s+");
            int N = Integer.parseInt(S[0]);
            int M = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.maxPerm(N,M));
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    // Variable to store the maximum valid permutation found.
    static int ans;

    // Recursive function to generate all permutations of digits and find the maximum valid number <= M.
    static void maxs(ArrayList<Integer> digits, int maxLimit, ArrayList<Integer> currentPermutation, boolean[] used) {
        // Base case: when a full permutation is formed.
        if (currentPermutation.size() == digits.size()) {
            StringBuilder numberString = new StringBuilder();
            for (int digit : currentPermutation) {
                // Skip leading zeros unless it's the only digit.
                if (digit == 0 && numberString.length() == 0) {
                    continue;
                }
                numberString.append(digit);
            }

            // Convert formed permutation to integer.
            if (numberString.length() == 0) return;  // Handle edge case of all zeros.
            int value = Integer.parseInt(numberString.toString());

            // Check if the formed number is <= M and update the maximum if valid.
            if (value <= maxLimit) {
                ans = Math.max(ans, value);
            }
            return;
        }

        // Try placing each unused digit into the current position.
        for (int i = 0; i < digits.size(); i++) {
            if (!used[i]) {
                used[i] = true;  // Mark digit as used.
                currentPermutation.add(digits.get(i));  // Add digit to current permutation.
                
                // Recur to form further positions.
                maxs(digits, maxLimit, currentPermutation, used);
                
                // Backtrack: remove last digit and mark it as unused.
                currentPermutation.remove(currentPermutation.size() - 1);
                used[i] = false;
            }
        }
    }

    // Main function to find the maximum permutation of digits of N that is <= M.
    static int maxPerm(int N, int M) {
        ans = Integer.MIN_VALUE;

        // Extract digits of N into a list.
        ArrayList<Integer> digits = new ArrayList<>();
        while (N > 0) {
            digits.add(N % 10);
            N /= 10;
        }

        // Prepare for generating permutations.
        ArrayList<Integer> currentPermutation = new ArrayList<>();
        boolean[] used = new boolean[digits.size()];

        // Start generating permutations and checking each one.
        maxs(digits, M, currentPermutation, used);

        // If no valid permutation was found, return -1.
        return ans == Integer.MIN_VALUE ? -1 : ans;
    }
}
