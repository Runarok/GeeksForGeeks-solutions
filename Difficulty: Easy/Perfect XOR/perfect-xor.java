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
            long ans = ob.total_count(n);
            System.out.println(ans);
        }
	}
}


// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to calculate the total count of numbers with zeros in the binary representation of 'n'
    public long total_count(long n)
    {
        // Initialize count for zeros in the binary representation
        int count = 0;
        
        // Iterate until all bits of 'n' are processed
        while (n != 0) {
            // Check if the least significant bit is 0
            if ((n & 1) == 0) {
                count++;  // Increment the zero count
            }
            // Right shift 'n' by 1 to move to the next bit
            n >>= 1;
        }
        
        // Return 2 raised to the power of the count of zeros in the binary representation
        return (long)Math.pow(2, count);
    }
}
