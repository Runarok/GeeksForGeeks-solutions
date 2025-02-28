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
    	     arr[i]=sc.nextInt();
    	     
    	     
    	        Geeks obj=new Geeks();
            	obj.xor1ToN(arr,n);
        	    obj.printArr(arr,n);
        	    obj.setToZero(arr,n);
        	    obj.printArr(arr,n);
    	   
    	 
System.out.println("~");
}
    }
}



// } Driver Code Ends

class Geeks {
    
    // Function to print the array elements
    static void printArr(int arr[], int n) {
        // Iterate through the array and print each element followed by a space
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        // Print a new line after printing the array
        System.out.println();
    }
    
    // Function to set all elements of the array to zero
    static void setToZero(int arr[], int n) {
        // Use Arrays.fill to set all elements of the array to 0
        Arrays.fill(arr, 0);
    }
    
    // Function to apply XOR between each element and its index
    static void xor1ToN(int arr[], int n) {
        // Iterate through the array and apply XOR with the index
        for (int i = 0; i < n; i++) {
            arr[i] = arr[i] ^ i;  // XOR arr[i] with i
        }
    }
}



//{ Driver Code Starts.

// } Driver Code Ends