//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java

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
		    
		    
		    Complete obj = new Complete();
		    long res = obj.calculate(arr, sizeOfArray);
		    System.out.println(res);
		}
	}
}





// } Driver Code Ends

// User function Template for Java

class Complete {
    
    // Function to find the number of pairs where XOR of two elements is 0
    public static long calculate(int arr[], int n) {
        // Initialize the count to 0, to track the number of valid pairs
        long count = 0;
        
        // Sort the array to make the comparison easier (though sorting is not necessary for XOR operations)
        Arrays.sort(arr);
        
        // Iterate through all pairs of elements in the array
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                // Calculate XOR of the current pair of elements
                long sum = arr[i] ^ arr[j];
                
                // If XOR is 0, it means the two elements are equal, so increment the count
                if (sum == 0) {
                    count++;
                }
            }
        }
        
        // Return the total count of pairs with XOR 0
        return count;
    }
}
