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
			int n = Integer.parseInt(read.readLine());
			String S[] = read.readLine().split(" ");
			int[] arr = new int[n];
			for (int i = 0; i < n; i++)
				arr[i] = Integer.parseInt(S[i]);
			int k = Integer.parseInt(read.readLine());

			Solution ob = new Solution();
			System.out.println(ob.countPairs(n, arr, k));
		
System.out.println("~");
}
	}
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count pairs with a given remainder condition
    static long countPairs(int n, int[] arr, int k) {
        long count = 0;
        
        // Array to store frequency of each remainder when divided by k
        int[] remainderFrequency = new int[k];
        
        // Iterate over each number in the array
        for (int num : arr) {
            // Find the remainder when dividing by k
            int remainder = num % k;
            
            // If the remainder is negative, adjust it to ensure it's positive
            if (remainder < 0) remainder += k;
            
            // Add the frequency of the current remainder to the count
            count += remainderFrequency[remainder];
            
            // Increment the frequency of the current remainder
            remainderFrequency[remainder]++;
        }
        
        // Return the total number of valid pairs
        return count;
    }
}
