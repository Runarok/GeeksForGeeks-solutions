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
                    System.out.println(ob.lucas(n));
                
System.out.println("~");
}
        }
}    
// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to calculate nth Lucas number
    public long lucas(int n)
    {
        // Using space-optimized approach to calculate the Lucas number
        return func(n);
    }

    // Space-optimized approach to calculate Lucas number
    public long func(int n){
        // Base cases for n = 0 and n = 1
        if (n == 0) return 2;
        if (n == 1) return 1;

        // Variables to store the previous two Lucas numbers
        long prev1 = 1, prev2 = 2;

        // Loop to calculate the nth Lucas number using the previous two
        for (int i = 2; i <= n; i++) {
            long curr = (prev1 + prev2) % 1000000007; // Calculate current Lucas number
            prev2 = prev1;  // Update prev2 to prev1
            prev1 = curr;   // Update prev1 to current value
        }

        // Return the nth Lucas number
        return prev1;
    }
}
