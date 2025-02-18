//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {   
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            long a = sc.nextLong();
            long b = sc.nextLong();

            Solution ob = new Solution();
            System.out.println(ob.DifferOne(a, b));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long DifferOne(long a, long b) {
        // Initialize answer and count of differing bits
        long ans = 1;
        int count = 0;
        int k = 0;
        
        // Loop through each of the 32 bits (for a 32-bit integer)
        while (k < 32) {
            // Compare the k-th bit of both numbers
            if ((a & (1 << k)) != (b & (1 << k))) {
                count++;  // Increment count if the bits differ
            }
            
            // If more than one bit differs, return 0
            if (count > 1) {
                ans = 0;
                break;
            }
            k++;
        }

        // If no bits differ, return 0 as the numbers are the same
        if (count == 0) {
            ans = 0;
        }

        return ans;
    }
}
