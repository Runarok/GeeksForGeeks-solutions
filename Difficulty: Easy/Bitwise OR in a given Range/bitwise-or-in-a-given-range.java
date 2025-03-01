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
                    long L = sc.nextLong();
                    long R = sc.nextLong();
                    Solution ob = new Solution();
                    System.out.println(ob.findBitwiseOR(L,R));
                }
        }
}    
// } Driver Code Ends

// User function Template for Java

class Solution {
    long findBitwiseOR(long L, long R) {
        // Loop until L is less than R
        while (L < R) {
            // Update L by setting its rightmost 0 bit to 1
            L |= (L + 1);
        }
        
        // Return the updated value of L, which is the result of the bitwise OR operation
        return L;
    }
}
