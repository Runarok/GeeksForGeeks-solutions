//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            int A[] = new int[N];
            int B[] = new int[N];
            int C[] = new int[N];
            String a1[] = in.readLine().trim().split("\\s+");
            String a2[] = in.readLine().trim().split("\\s+");
            String a3[] = in.readLine().trim().split("\\s+");
            for(int i = 0;i < N;i++){
                A[i] = Integer.parseInt(a1[i]);
                B[i] = Integer.parseInt(a2[i]);
                C[i] = Integer.parseInt(a3[i]);
            }
            
            Solution ob = new Solution();
            System.out.println(ob.pairCount(N, A, B, C));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int pairCount(int N, int A[], int B[], int C[]) {
        // Create a HashSet to store the elements from array C
        HashSet<Integer> set = new HashSet<>();

        // Add elements of array C to the HashSet
        for (int i : C) {
            set.add(i);
        }

        int cnt = 0;

        // Iterate through the arrays A and B
        for (int i = 0; i < N; i++) {
            // Check if the difference (A[i] - B[i]) exists in the HashSet
            if (set.contains(A[i] - B[i])) {
                cnt++;  // Increment the count if condition is met
            }
        }

        // Return the final count
        return cnt;
    }
}
