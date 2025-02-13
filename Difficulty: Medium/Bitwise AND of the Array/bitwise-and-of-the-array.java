//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            String input_line[] = read.readLine().trim().split("\\s+");
            int N = Integer.parseInt(input_line[0]);
            int X = Integer.parseInt(input_line[1]);
            input_line = read.readLine().trim().split("\\s+");
            int A[]= new int[N];
            for(int i = 0; i < N; i++)
                A[i] = Integer.parseInt(input_line[i]);
            Solution ob = new Solution();
            int ans = ob.count(N, A, X); 
            System.out.println(ans);
        
System.out.println("~");
}
    } 
}
// } Driver Code Ends

// User function Template for Java

class Solution { 
    int count(int N, int A[], int X) {   
        int prefix = 0, minRemovals = N;

        // Iterate over each bit position from most significant (30) to least significant (0)
        for (int bit = 30; bit >= 0; bit--) {
            // If the current bit in X is set (1), update prefix and continue
            if (((X >> bit) & 1) != 0) {
                prefix ^= (1L << bit);
                continue;
            }

            int countValid = 0;
            long potentialPrefix = prefix ^ (1L << bit);

            // Count how many elements in A satisfy the condition
            for (int j = 0; j < N; j++) {
                if ((A[j] & potentialPrefix) == potentialPrefix) {
                    countValid++;
                }
            }

            // Update the minimum number of elements to remove
            minRemovals = Math.min(minRemovals, N - countValid);
        }

        return minRemovals;
    }
}  
