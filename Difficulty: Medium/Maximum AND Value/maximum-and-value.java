//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {

    public static int maxAND(int arr[], int N) {
        int maxAndValue = 0;

        // Iterate over all bits from the most significant (31st) to the least (0th)
        for (int bitPosition = 31; bitPosition >= 0; bitPosition--) {
            int count = 0;
            int potentialMax = maxAndValue | (1 << bitPosition);

            // Count how many numbers satisfy the AND condition with the potential max
            for (int i = 0; i < N; i++) {
                if ((arr[i] & potentialMax) == potentialMax) {
                    count++;
                }
            }

            // If at least two numbers satisfy the condition, update maxAndValue
            if (count >= 2) {
                maxAndValue = potentialMax;
            }
        }
        
        return maxAndValue;
    }
}


//{ Driver Code Starts.

class BitWise {
    
	public static void main (String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int t = Integer.parseInt(br.readLine().trim()); //Inputting the testcases
		while(t-->0){
		    
		    //input size of array
		    int n = Integer.parseInt(br.readLine());
		    String inputLine[] = br.readLine().trim().split(" ");
		    int arr[] = new int[n];
		    
		    //inserting elements in the array
		    for(int i=0; i<n; i++){
		        arr[i]=Integer.parseInt(inputLine[i]);
		    }
		    
		    Solution obj = new Solution();
		    
		    //calling maxAND() method of class AND
		    System.out.println(obj.maxAND(arr, n));
		
System.out.println("~");
}
	}
}

// } Driver Code Ends