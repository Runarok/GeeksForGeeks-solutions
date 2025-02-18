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
            String s = br.readLine().trim();
            String[] S = s.split(" ");
            int n = Integer.parseInt(S[0]);
            int k = Integer.parseInt(S[1]);
            Solution ob = new Solution();
            long ans = ob.total_Money(n, k);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

class Solution
{
    public long total_Money(int n, int k)
    {
        // Initialize sum to store the total money
        long sum = 0;
        
        // Loop from k to n, incrementing by k each time
        for(long i = k; i <= n; i += k) {
            sum = sum + i; // Add the current value of i to sum
        }
        
        // Return the total sum
        return sum;
    }
}
