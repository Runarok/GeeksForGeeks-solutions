//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            long n = Long.parseLong(br.readLine().trim());            
            Solution ob = new Solution();
            long ans = ob.sum_of_square_oddNumbers(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution
{
    public long sum_of_square_oddNumbers(long n)
    {
        long sum = 0; // Initialize sum to 0
        long j = 1; // Start with the first odd number
        
        // Loop through n odd numbers
        for (int i = 0; i < n; i++)
        {
            sum += Math.pow(j, 2); // Add the square of the current odd number to sum
            j = j + 2; // Move to the next odd number
        }
        return sum; // Return the final sum
    }
}
