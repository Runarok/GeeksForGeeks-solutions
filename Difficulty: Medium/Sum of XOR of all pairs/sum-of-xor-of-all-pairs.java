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
		    int sizeOfArray = Integer.parseInt(element[0]);
		    
		    int arr [] = new int[sizeOfArray];
		    
		    line = br.readLine();
		    String[] elements = line.trim().split("\\s+");
		    for(int i = 0;i<sizeOfArray;i++){
		        arr[i] = Integer.parseInt(elements[i]);
		    }
		    
		    
		    Solution obj = new Solution();
		    long res = obj.sumXOR(arr, sizeOfArray);
		    System.out.println(res);
		
System.out.println("~");
}
	}
}



// } Driver Code Ends

class Solution {
   
    // Function for finding the sum of XOR of all pairs in the array
    public long sumXOR (int arr[], int n) {
        // Create an array to store the count of elements with a 0 bit at each position
        long[] count = new long[32];
        long ans = 0;
        
        // Count the number of elements with a 0 bit at each bit position
        for(int x : arr)
            for(int bit = 0; bit < 31; bit++)
                if(((x >> bit) & 1) == 0)
                    ++count[bit];
        
        // Calculate the sum of XOR for all pairs
        for(int x : arr)
            for(int bit = 0; bit < 31; bit++)
                if(((x >> bit) & 1) == 1)
                    ans += (1L << bit) * count[bit];  // Add contribution for this bit position
        
        return ans;  // Return the total sum
    }
}
