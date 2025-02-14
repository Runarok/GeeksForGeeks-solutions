//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;

class GFG{
	public static void main(String [] args) throws IOException{
		Scanner sc = new Scanner(System.in);
		int test = sc.nextInt();
		while(test-- > 0) {
			int N = sc.nextInt();
			int [][] M = new int[N][N];
			for(int i = 0; i < N; i++) {
				for(int j = 0; j < N; j++) {
					M[i][j] = sc.nextInt();
				}
			}
			Solution obj = new Solution();
			System.out.println(obj.sumDiagonal(N, M));
		
System.out.println("~");
}
	}
}
// } Driver Code Ends

class Solution {
    // Function to return the sum of the diagonal elements of the matrix M
    int sumDiagonal(int N, int[][] M) {
        int sum = 0;
        
        // Loop to calculate the sum of the principal diagonal elements
        for (int i = 0; i < N; i++) {
            sum += M[i][i];  // Add the element at position (i, i) (diagonal element)
        }
        
        // Return the sum of the diagonal elements
        return sum;
    }
}
