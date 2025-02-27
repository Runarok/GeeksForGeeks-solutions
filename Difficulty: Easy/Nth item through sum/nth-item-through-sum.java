//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String val[] = in.readLine().trim().split("\\s++");
            int L1 = Integer.parseInt(val[0]);
            int L2 = Integer.parseInt(val[1]);
            String arr[] = in.readLine().trim().split("\\s++");
            int [] A = new int[L1];
            for(int i = 0;i < L1; i++)
                A[i] = Integer.parseInt(arr[i]);
            String arr1[] = in.readLine().trim().split("\\s++");
            int [] B = new int[L2];
            for(int i = 0;i < L2; i++)
                B[i] = Integer.parseInt(arr1[i]);
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.nthItem(L1, L2, A, B, N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    static int nthItem(int L1, int L2, int A[], int B[], int N) {
        // Min-heap to store all unique pair sums in sorted order
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        // Set to track already seen sums to avoid duplicates
        HashSet<Integer> seen = new HashSet<>();

        // Compute all pair sums from arrays A and B
        for (int numA : A) {
            for (int numB : B) {
                int sum = numA + numB;

                // Add sum to heap if it hasn't been added before
                if (seen.add(sum)) {
                    minHeap.offer(sum);
                }
            }
        }

        // If there are fewer than N unique sums, return -1
        if (minHeap.size() < N) {
            return -1;
        }

        // Extract the Nth smallest sum from the min-heap
        int nthSum = -1;
        for (int i = 0; i < N; i++) {
            nthSum = minHeap.poll();
        }

        return nthSum;
    }
}
