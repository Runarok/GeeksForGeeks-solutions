//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class FastReader{ 
    BufferedReader br; 
    StringTokenizer st; 

    public FastReader(){ 
        br = new BufferedReader(new InputStreamReader(System.in)); 
    } 

    String next(){ 
        while (st == null || !st.hasMoreElements()){ 
            try{ st = new StringTokenizer(br.readLine()); } catch (IOException  e){ e.printStackTrace(); } 
        } 
        return st.nextToken(); 
    } 

    String nextLine(){ 
        String str = ""; 
        try{ str = br.readLine(); } catch (IOException e) { e.printStackTrace(); } 
        return str; 
    } 
    
    Integer nextInt(){
        return Integer.parseInt(next());
    }
} 
    
class GFG {
    public static void main(String args[]) throws IOException {
        FastReader sc = new FastReader();
        PrintWriter out = new PrintWriter(System.out);
        int t = sc.nextInt();
        while (t-- > 0) {
            int N = sc.nextInt(), A[] = new int[N];
    
            for (int i = 0; i < N; i++) A[i] = sc.nextInt();
    
            Solution ob = new Solution();
            out.println(ob.solve(N, A));
        
out.println("~");
}
        out.flush();
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    int solve(int N, int[] A) {
        
        // Initialize result index to -1 (indicating no valid index found yet)
        int resultIndex = -1;

        // Iterate from the last index towards the first
        for (int currentIndex = N - 1; currentIndex >= 0; currentIndex--) {
            
            // Check if the current element is less than 9
            if (A[currentIndex] < 9) {
                
                // Store the found index and exit loop
                resultIndex = currentIndex;
                break;
            }
        }

        // Return 1-based index (convert 0-based resultIndex to 1-based by adding 1)
        return resultIndex + 1;
    }
};
