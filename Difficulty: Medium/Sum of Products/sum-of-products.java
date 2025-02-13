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
            long Arr[] = new long[N];
            String[] S = read.readLine().split(" ");
            for (int i = 0; i < N; i++) Arr[i] = Long.parseLong(S[i]);
            Solution ob = new Solution();
            System.out.println(ob.pairAndSum(N, Arr));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the sum of pairwise AND values
    static long pairAndSum(int n, long arr[]) {
        long sum = 0; // Variable to store the sum of pairwise ANDs

        // Iterate through each bit position (0 to 30)
        for (int i = 0; i < 31; i++) {
            long count = 0; // Variable to count how many numbers have the i-th bit set

            // Iterate through all elements of the array
            for (int j = 0; j < n; j++) {
                // Check if the i-th bit of the j-th element is set
                if ((arr[j] & (1 << i)) != 0) {
                    count++; // Increment the count if the bit is set
                }
            }

            // If more than one number has the i-th bit set, calculate the contribution
            if (count > 1) {
                // Calculate the number of valid pairs (count choose 2) and add to sum
                sum += (count * (count - 1) / 2) * (1L << i);
            }
        }

        return sum; // Return the final sum of pairwise AND values
    }
}
