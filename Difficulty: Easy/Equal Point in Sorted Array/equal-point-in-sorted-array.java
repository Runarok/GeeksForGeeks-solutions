//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG
{
	public static void main(String[] args) throws IOException
	{
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine()); 
        while(t-->0)
        {
            int n = Integer.parseInt(read.readLine()); 
            int a[] = new int[n];
            
            String line = read.readLine(); // to read multiple integers line
            String[] strs = line.trim().split("\\s+");
            
            for (int i = 0; i < n; i++) {
                a[i] = Integer.parseInt(strs[i]);
            }
            
            Compute obj = new Compute();
            System.out.println( obj.findEqualPoint(a, n) );
            
        
System.out.println("~");
}
	}
}

// } Driver Code Ends

//User function Template for Java

class Compute 
{
    static int findEqualPoint(int arr[], int n) 
	{
	    // Array to store indices where consecutive elements are the same
	    int res[] = new int[n];
	    int i = 0, dist = 0;
	    
	    // Loop to find the consecutive elements that are equal
	    while(i < n){
	        res[dist++] = i++;  // Store the index
	        
	        // Skip elements that are equal to the previous element
	        while(i < n && arr[i] == arr[i - 1]) 
	            i++;
	    }
	    
	    // If the number of equal elements is odd, return the middle index
	    // Otherwise, return -1 indicating no valid equal point
	    return (dist & 1) != 0 ? res[dist >> 1] : -1;
	}
}
