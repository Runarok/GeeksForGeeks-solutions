//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.numOfPrisoners(N));
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution {
    
    // Function to calculate the number of prisoners
    static int numOfPrisoners(Long N) {
        // Calculate the logarithm of N to base 2 and return the ceiling value as an integer
        return (int) (Math.ceil(Math.log(N) / Math.log(2))); 
    }
}
