//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java

//Initial Template for Java


/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;


class Array {
    
    // Driver code
	public static void main (String[] args) throws IOException{
		// Taking input using buffered reader
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int testcases = Integer.parseInt(br.readLine());
		
		// looping through all testcases
		while(testcases-- > 0){
		    String line = br.readLine();
		    String[] element = line.trim().split("\\s+");
		    int N = Integer.parseInt(element[0]);
		    int arr [][] = new int[N][2];
		    for(int i = 0;i<N;i++){
	            line = br.readLine();
		        String[] elements = line.trim().split("\\s+");
		        arr[i][0] = Integer.parseInt(elements[0]);
		        arr[i][1] = Integer.parseInt(elements[1]);    
	        }
            line = br.readLine();
	        String[] elements = line.trim().split("\\s+");
	        int K = Integer.parseInt(elements[0]);
		    int Q = Integer.parseInt(elements[1]);
		    int queries [] = new int[Q];
		    for(int i =0;i<Q;i++){
		        queries[i] = Integer.parseInt(br.readLine());
		    }
		    
		    Complete obj = new Complete();
		    ArrayList<Boolean> ans;
		    ans = obj.QueryComputation(N, arr, K, Q, queries);
    	    for(boolean i: ans)
    	    {
    	        if(i == true)
    	            System.out.println("Yes");
    	        else
    	            System.out.println("No");
    	    }
		}
	}
}



// } Driver Code Ends

class Complete {
    public static ArrayList<Boolean> QueryComputation(int n, int arr[][], int k, int q, int queries[]) {
        // Step 1: Initialize the frequency array to store the count of doctors recommending each platelet count
        int maxVal = 200000; // The maximum value for the platelet count
        int[] freq = new int[maxVal + 1];
        
        // Step 2: Process each doctor's range and update the frequency array
        // Loop through each doctor's recommendation range
        for (int i = 0; i < n; i++) {
            int li = arr[i][0];  // Start of the range
            int ri = arr[i][1];  // End of the range
            freq[li]++;          // Increment the start of the range
            if (ri + 1 <= maxVal) {
                freq[ri + 1]--;  // Decrement the position after the end of the range
            }
        }

        // Step 3: Compute the prefix sum to find the number of doctors recommending each platelet count
        // This step converts the frequency array into a cumulative array that tracks how many doctors recommend each platelet count
        for (int i = 1; i <= maxVal; i++) {
            freq[i] += freq[i - 1];
        }
        
        // Step 4: Answer the queries based on the computed frequency
        ArrayList<Boolean> result = new ArrayList<>();
        // Loop through the queries and check if the platelet count is safe (i.e., recommended by at least 'k' doctors)
        for (int i = 0; i < q; i++) {
            int p = queries[i]; // The platelet count in the current query
            if (freq[p] >= k) {
                result.add(true);  // Safe platelet count (recommended by at least 'k' doctors)
            } else {
                result.add(false);  // Not a safe platelet count
            }
        }
        
        return result;  // Return the list of results for the queries
    }
}
