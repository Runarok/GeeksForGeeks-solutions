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
            String a[] = in.readLine().trim().split("\\s+");
            long S = Long.parseLong(a[0]);
            int N = Integer.parseInt(a[1]);
            long X = Long.parseLong(a[2]);
            String a1[] = in.readLine().trim().split("\\s+");
            long A[] = new long[N];
            for(int i = 0;i < N;i++)
                A[i] = Long.parseLong(a1[i]);
            
            Solution ob = new Solution();
            if(ob.isPossible(S, N, X, A) == 1)
                System.out.println("yes");
            else
                System.out.println("no");
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int isPossible(long S, int N, long X, long A[]) {
        long paper[] = new long[N + 1]; // Array to store generated numbers
        paper[0] = S; // Initial value
        
        long sum = S;
        
        // Generate the sequence based on the given rules
        for (int i = 0; i < N; i++) {
            paper[i + 1] = sum + A[i]; // Compute next number in sequence
            
            if (paper[i + 1] >= X) break; // Stop early if the value exceeds X
            
            sum += paper[i + 1]; // Accumulate sum for further calculations
        }
        
        int i = paper.length - 1; // Start checking from the largest value
        
        // Check if we can form X using elements from the sequence
        while (i >= 0 && X > 0) {
            if (X >= paper[i]) {
                X -= paper[i]; // Subtract the largest possible value from X
            }
            i--; // Move to the next smaller value
        }
        
        return (X == 0) ? 1 : 0; // Return 1 if we form X exactly, otherwise 0
    }
}
