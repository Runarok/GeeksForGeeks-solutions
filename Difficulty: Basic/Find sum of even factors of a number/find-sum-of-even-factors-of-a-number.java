//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.evenFactors(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution{
    // Function to return the sum of even factors of a given number N
    static int evenFactors(int N) 
    { 
        // Initialize sum to store the sum of even factors
        int sum = 0;
        
        // Loop through numbers from 1 to N to find factors
        for(int i = 1; i <= N; i++) {
            // Check if i is a factor of N and is even
            if(N % i == 0 && i % 2 == 0) {
                // Add the even factor to the sum
                sum += i;
            }
        }
        
        // Return the sum of even factors
        return sum;
    }
}
