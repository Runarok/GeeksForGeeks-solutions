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
            int P, Q, R, i;
            P = Integer.parseInt(read.readLine());
            int A[] = new int[P];
            String s1[] = read.readLine().split(" ");
            for (i = 0; i < P; i++) A[i] = Integer.parseInt(s1[i]);
            Q = Integer.parseInt(read.readLine());
            int B[] = new int[Q];
            String s2[] = read.readLine().split(" ");
            for (i = 0; i < Q; i++) B[i] = Integer.parseInt(s2[i]);
            R = Integer.parseInt(read.readLine());
            int C[] = new int[R];
            String s3[] = read.readLine().split(" ");
            for (i = 0; i < R; i++) C[i] = Integer.parseInt(s3[i]);
            Solution ob = new Solution();
            System.out.println(ob.findClosest(P, Q, R, A, B, C));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the minimum of the maximum differences between elements of three arrays
    int findClosest(int P, int Q, int R, int A[], int B[], int C[]) {
        // Initialize the answer to a large value
        int minDifference = Integer.MAX_VALUE;

        // Initialize pointers for each array
        int i = 0; // Pointer for array A
        int j = 0; // Pointer for array B
        int k = 0; // Pointer for array C

        // Iterate until any pointer exceeds the length of its respective array
        while (i < P && j < Q && k < R) {
            // Get the current values from each array
            int aVal = A[i];
            int bVal = B[j];
            int cVal = C[k];

            // Calculate the maximum difference between the three values
            int currentDifference = Math.max(Math.abs(aVal - bVal), Math.max(Math.abs(bVal - cVal), Math.abs(cVal - aVal)));

            // Update the answer with the minimum of the current difference
            minDifference = Math.min(currentDifference, minDifference);

            // Increment the pointer of the array with the smallest value to minimize the difference
            if (aVal <= bVal && aVal <= cVal) {
                i++; // Move pointer for array A
            } else if (bVal <= aVal && bVal <= cVal) {
                j++; // Move pointer for array B
            } else {
                k++; // Move pointer for array C
            }
        }

        // Return the smallest maximum difference found
        return minDifference;
    }
}
