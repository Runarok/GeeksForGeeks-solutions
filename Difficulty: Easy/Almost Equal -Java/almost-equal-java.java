//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    
	public static void main (String[] args)
	{
	     //taking input using Scanner class
    	 Scanner sc = new Scanner(System.in);
    	 
    	 //taking total number of testcases
    	 int t = sc.nextInt();
    	 
    	 boolean flag = false;
    	 while(t-- > 0){
    	   
    	   //taking the 2 strings
    	   String s1=sc.next();
    	   String s2=sc.next();
    	   
    	   //creating an object of class Geeks
    	   Geeks obj=new Geeks();
    	   
    	   //calling coutChars method
    	   //of class Geeks and passing
    	   //both the Strings and printing
    	   //the result
    	   System.out.println(obj.coutChars(s1,s2));
    	   
    	 
System.out.println("~");
}
    }
}




// } Driver Code Ends

// User function Template for Java

/* Function to count the number of characters 
 * to make s1 and s2 equal
 * s1 : first string
 * s2 : second string
 */
class Geeks {
    
    // Function to calculate the number of characters 
    // that need to be changed to make s1 and s2 equal
    static int coutChars(String s1, String s2) {
        
        // Array to store the frequency count of characters (for all ASCII characters)
        int[] a = new int[256];
        
        // Iterate through the first string and count the occurrences of each character
        int n = s1.length();
        for (int i = 0; i < n; i++) {
            a[s1.charAt(i)]++;
        }
        
        // Iterate through the second string and decrease the occurrences of each character
        for (int i = 0; i < s2.length(); i++) {
            a[s2.charAt(i)]--;
        }
        
        // Variable to store the total count of characters that need to be changed
        int count = 0;
        
        // Iterate over the character frequencies
        for (int i = 0; i < 256; i++) {
            // If there is a non-zero frequency, add the absolute difference to the count
            if (a[i] != 0) {
                count += Math.abs(a[i]);
            }
        }
        
        // Return the total number of characters to be changed
        return count;
    }
}



//{ Driver Code Starts.

// } Driver Code Ends