//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    long n = sc.nextLong();
                    Solution ob = new Solution();
                    System.out.println(ob.onlyFirstAndLastAreSet(n));
                }
        }
}    
// } Driver Code Ends

// User function Template for Java
class Solution {
    
    // Function to check if only the first and last bits are set in N
    int onlyFirstAndLastAreSet(long N) {
        
        // Calculate the highest power of 2 that is less than or equal to N
        int highestPowerOf2 = (int)Long.highestOneBit(N);
        
        // Check if N is equal to (highestPowerOf2 | 1), which means only the first and last bits are set
        return (N == (highestPowerOf2 | 1)) ? 1 : 0;
    }
}
