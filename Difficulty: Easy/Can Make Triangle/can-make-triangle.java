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

class GFG{
    public static void main(String args[]) throws IOException { 
        FastReader read = new FastReader();
        int t = read.nextInt();
        PrintWriter out = new PrintWriter(System.out);
        while(t-- > 0){
            int N = read.nextInt();
            int A[]= new int[N];
            for(int i = 0; i < N; i++)
                A[i] = read.nextInt();

            Solution ob = new Solution();
            int ans[] = ob.canMakeTriangle(A, N); 
            for (int i=0;i<ans.length;i++) 
                out.print(ans[i]+" "); 
            out.println();
        
out.println("~");
}
        out.flush();
    } 
} 
// } Driver Code Ends


class Solution {
    /**
     * Function to check if triangles can be formed using consecutive triplets in the array.
     * @param A - Array of integers representing side lengths.
     * @param N - Length of the array.
     * @return Array of 1s and 0s, where 1 indicates a valid triangle can be formed and 0 indicates it cannot.
     */
    int[] canMakeTriangle(int A[], int N) {
        // Array to store results for each triplet
        int[] result = new int[N-2];
        int index = 0;

        // Loop through all triplets in the array
        for (int i = 0; i < N - 2; i++) {
            // Check if the triplet satisfies the triangle inequality theorem
            if ((A[i] + A[i+1] > A[i+2]) && (A[i+1] + A[i+2] > A[i]) && (A[i] + A[i+2] > A[i+1])) {
                result[index] = 1;  // Valid triangle
            } else {
                result[index] = 0;  // Invalid triangle
            }
            index++;  // Move to next position in result array
        }
        return result;  // Return the result array
    }
}
