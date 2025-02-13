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
            int N = Integer.parseInt(read.readLine());
            
            String S[] = read.readLine().split(" ");
            String S1[] = read.readLine().split(" ");
            
            Long[] A = new Long[N];
            Long[] B = new Long[N];
            
            for(int i=0; i<N; i++)
            {
                A[i] = Long.parseLong(S[i]);
                B[i] = Long.parseLong(S1[i]);
            }

            Solution ob = new Solution();
            System.out.println(ob.yesXorNo(N,A,B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function template for Java

class Solution {
    static String yesXorNo(int N, Long[] A, Long[] B) {
        return "Yes"; // Placeholder return value
    }
}
