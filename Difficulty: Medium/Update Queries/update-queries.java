//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class GFG{
	public static void main(String [] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int test = Integer.parseInt(br.readLine());
		while(test-- > 0) {
			String [] str = br.readLine().trim().split(" ");
			int N = Integer.parseInt(str[0]);
			int Q = Integer.parseInt(str[1]);
			int [][] U = new int[Q][3];
			int i = 0;
			while(i < Q) {
				str = br.readLine().trim().split(" ");
				U[i][0] = Integer.parseInt(str[0]);
				U[i][1] = Integer.parseInt(str[1]);
				U[i][2] = Integer.parseInt(str[2]);
				i++;
			}
			Solution obj = new Solution();
			int [] arr = obj.updateQuery(N, Q, U);
			for(int j: arr) {
				System.out.print(j+" ");
			}
			System.out.println();
		
System.out.println("~");
}
	}
}
// } Driver Code Ends


//User function Template for Java

class Solution
{
    // Function to update the array based on the given queries
    int[] updateQuery(int n, int q, int u[][])
    {
        int res[] = new int[n];  // Initialize the result array with size n
        
        // Iterate through each query
        for (int j = 0; j < q; j++) {
            int l = u[j][0];  // Left index of the range
            int r = u[j][1];  // Right index of the range
            int x = u[j][2];  // Value to be applied using bitwise OR
            
            // Apply the bitwise OR operation on the specified range [l-1, r-1]
            for (int i = l - 1; i < r; i++) {
                res[i] |= x;  // Perform the bitwise OR operation
            }
        }
        
        // Return the updated array
        return res;
    }
}
