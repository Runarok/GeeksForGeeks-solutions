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
                    int n = sc.nextInt();
                    Solution ob = new Solution();
                    System.out.println(ob.padovanSequence(n));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

//User function Template for Java

class Solution
{
    // Modulo value to prevent overflow
    static int mod = 1000000007;

    // Function to compute Padovan Sequence value at index 'n'
    public int padovanSequence(int n)
    {
        // Base cases: padovan sequence for 0, 1, 2 is always 1
        if(n == 0 || n == 1 || n == 2)
            return 1;

        // Array to store results of subproblems
        int[] ans = new int[n+1];
        
        // Initializing the first three values of the Padovan sequence
        ans[0] = ans[1] = ans[2] = 1;

        // Loop to calculate the Padovan sequence values from 3 to n
        for(int i = 3; i <= n; i++)
        {
            // Formula for Padovan sequence: P(n) = P(n-2) + P(n-3)
            ans[i] = (ans[i-2] + ans[i-3]) % mod;
        }
        
        // Return the result for the nth Padovan number
        return ans[n];
    }
}
