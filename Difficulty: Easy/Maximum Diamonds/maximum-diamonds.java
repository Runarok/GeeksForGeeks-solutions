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
            String S[] = read.readLine().split(" ");
            
            int N = Integer.parseInt(S[0]);
            int K = Integer.parseInt(S[1]);
            
            int[] A = new int[N];
            
            String S1[] = read.readLine().split(" ");
            for(int i=0; i<N; i++)
                A[i] = Integer.parseInt(S1[i]);

            Solution ob = new Solution();
            System.out.println(ob.maxDiamonds(A,N,K));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    static long maxDiamonds(int[] A, int N, int K) {
        // Create a max-heap (priority queue) to extract the largest diamond value
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        
        // Add all diamonds to the priority queue
        for (int x : A) {
            pq.add(x);
        }
        
        int c = 0;
        long total = 0;
        
        // Extract the largest diamond, halve it, and add it back to the queue
        // Repeat this process K times
        while (c != K) {
            int temp = pq.poll();  // Get the largest diamond
            pq.add(temp / 2);      // Halve the value and reinsert it
            c++;
            total += temp;         // Add the extracted diamond value to the total
        }
        
        return total;  // Return the total value of diamonds collected
    }
}
