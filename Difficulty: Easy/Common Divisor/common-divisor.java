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
		    int M = Integer.parseInt(element[1]);
		   
		    
		    Complete obj = new Complete();
		    int ans = obj.common_divisor(N, M);
		    System.out.println(ans);
		}
	}
}




// } Driver Code Ends

// User function Template for Java

class Complete {
    
    // Function for finding the count of common divisors between two numbers
    public static int common_divisor(int n, int m) {
        // Find the smaller number between n and m to limit the loop
        int x = Math.min(n, m);
        int cnt = 0; // Counter for common divisors
        
        // Iterate from 1 to the smaller number to check for common divisors
        for (int i = 1; i <= x; i++) {
            // If both n and m are divisible by i, it's a common divisor
            if (n % i == 0 && m % i == 0) {
                cnt++; // Increment the count
            }
        }
        
        // Return the total count of common divisors
        return cnt;
    }
}
