//{ Driver Code Starts
//Initial Template for Java


import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    
	public static void main (String[] args)
	{
    	 Scanner sc = new Scanner(System.in);
    	 int t = sc.nextInt();
    	 
    	 boolean flag = false;
    	 while(t-- > 0){
    	  int n=sc.nextInt();
    	  int arr[]=new int[n];
    	  for(int i=0;i<n;i++)
    	  {
    	      arr[i]=sc.nextInt();
    	  }
    	  Geeks obj=new Geeks();
    	   System.out.println(obj.countSumSubsets(arr,n));
    	   
    	 
System.out.println("~");
}
    }
}


// } Driver Code Ends

//User function Template for Java

class Geeks{
    
    // Function to count subsets with even sum
    static int countSumSubsets(int arr[], int n) {
        
        int count = 0; // Variable to store the count of subsets with even sum
        int totalSubsets = 1 << n; // Total number of subsets (2^n)

        // Loop through all subsets (using bitmasking)
        for (int mask = 1; mask < totalSubsets; mask++) {
            int sum = 0; // Variable to store the sum of current subset

            // Check each bit of the mask to see if the corresponding element is in the subset
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) { // If the ith element is part of the subset
                    sum += arr[i]; // Add the element to the sum
                }
            }

            // If the sum is even, increment the count
            if (sum % 2 == 0) {
                count++;
            }
        }
        return count; // Return the total count of subsets with even sum
    }
}



//{ Driver Code Starts.

// } Driver Code Ends