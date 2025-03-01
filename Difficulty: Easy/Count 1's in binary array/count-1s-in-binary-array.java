//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class Main {
    
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int t = sc.nextInt();
		
		while(t-- > 0){
		   
		    int n = sc.nextInt();
		    int arr[] = new int[n];
		    for(int i = 0;i<n;i++){
		        arr[i] = sc.nextInt();
		    }
		    
		    Solution obj = new Solution();
		    System.out.println(obj.countOnes(arr, n));
		    
		
System.out.println("~");
}
		
	}
}
// } Driver Code Ends


// User function Template for Java

class Solution{
    // Function to count the number of ones in the binary array
    // N: size of array
    // arr[]: input array
    public static int countOnes(int arr[], int N){
        
        int i = 0;  // Start index
        int j = arr.length - 1;  // End index
        
        // Perform binary search to find the first 0 from the right side
        while(i <= j) {
            int mid = (i + j) / 2;  // Find the middle index
            
            if(arr[mid] == 1) {
                // If mid is 1, move the left pointer to the right
                i = mid + 1;
            } else if(arr[mid] == 0) {
                // If mid is 0, move the right pointer to the left
                j = mid - 1;
            }
        }
        
        // Return the number of 1's in the array, which is equal to the index i
        return i;
    }
}
