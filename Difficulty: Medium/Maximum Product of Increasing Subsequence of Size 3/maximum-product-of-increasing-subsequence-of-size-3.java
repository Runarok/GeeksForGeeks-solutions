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
		    int arr [] = new int[N];
		    line = br.readLine();
		    String[] elements = line.trim().split("\\s+");
		    for(int i = 0;i<N;i++){
	            arr[i] = Integer.parseInt(elements[i]);    
	        }
	        
		    Solution obj = new Solution();
		    ArrayList<Integer> ans;
		    ans = obj.maxProductSubsequence(arr, N);
        	if(ans.get(0) == -1)
        	    System.out.println("Not Present");
        	else{
        	    for(int i: ans)
        	        System.out.print(i + " ");
        	    System.out.println();
        	}
        	
		}
	}
}



// } Driver Code Ends

class Solution {
    // Function to find the subsequence with the maximum product
    public static ArrayList<Integer> maxProductSubsequence(int arr[], int n) {
        // Initialize the answer as 0, and create an ArrayList to store the result
        long ans = 0;
        ArrayList<Integer> list = new ArrayList<>();
        list.add(-1);  // Default list value
        TreeSet<Integer> left = new TreeSet<>();
        left.add(arr[0]);  // Start with the first element in the left set

        // Create an array to store the maximum element from the right side of each index
        int max[] = new int[n];
        max[n - 1] = arr[n - 1];

        // Fill the max array by iterating from the end of the array to the beginning
        for (int i = n - 2; i >= 0; i--) {
            max[i] = Math.max(arr[i], max[i + 1]);
        }

        // Iterate through the array from the second element to the second-last element
        for (int i = 1; i < n - 1; i++) {
            // Find the largest element on the left side that is smaller than arr[i]
            Integer l = left.floor(arr[i] - 1);
            // Get the maximum value from the right side
            int r = max[i + 1];

            // If a valid triplet is found and it results in a larger product, update the answer
            if (l != null && r > arr[i] && ((long) arr[i]) * l * r > ans) {
                ans = ((long) arr[i]) * l * r;
                list.clear();
                list.add(l);  // Add the valid triplet to the list
                list.add(arr[i]);
                list.add(r);
            }
            // Add the current element to the left set for future comparisons
            left.add(arr[i]);
        }

        // Return the list containing the subsequence with the maximum product
        return list;
    }
}
