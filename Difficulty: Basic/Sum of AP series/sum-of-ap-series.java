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
            String s = br.readLine();
            String[] S = s.split(" ");
            long n = Long.parseLong(S[0]);
            Long a = Long.parseLong(S[1]);
            Long d = Long.parseLong(S[2]);
            Solution ob = new Solution();
            Long ans = ob.sum_of_ap(n, a, d);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


//User function Template for Java

class Solution
{
    // Function to calculate the sum of an arithmetic progression (AP)
    public long sum_of_ap(long n, long a, long d)
    {
        // Calculate the last term of the AP
        long lastterm = a + (n - 1) * d;
        
        // Return the sum of the first 'n' terms using the AP sum formula
        return (n * (a + lastterm)) / 2;
    }
}
