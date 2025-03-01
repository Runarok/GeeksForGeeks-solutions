//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            System.out.println(ob.isWoodall(N));
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    // Function to check if the number N is a Woodall number
    static int isWoodall(int N) {
        int n = 1;
        
        // Continuously calculate Woodall numbers and compare with N
        while (true) {
            // Calculate the Woodall number for the current value of n
            long woodall = (long) n * (1L << n) - 1;
            
            // If Woodall number matches N, return 1
            if (woodall == N) {
                return 1;
            } 
            // If the calculated Woodall number exceeds N, return 0
            else if (woodall > N) {
                return 0;
            }
            n++; // Increment n and check the next potential Woodall number
        }
    }
}
