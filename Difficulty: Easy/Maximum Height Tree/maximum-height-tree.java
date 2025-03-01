//{ Driver Code Starts
// Initial Template for Java

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
            System.out.println(ob.height(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    
    // Function to find the maximum height of the pyramid
    static int height(int N) {
        // Loop through values of i to find the height
        for (int i = 1; i <= N; i++) {
            // If the sum of the first i natural numbers equals N, return i
            if (((i * (i + 1)) / 2) == N) {
                return i;
            } 
            // If the sum exceeds N, return the previous value of i
            else if ((i * (i + 1)) / 2 > N) {
                return i - 1;
            }
        }
        return 0; // Return 0 if no valid height is found
    }
}
