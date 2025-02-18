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
            int N=sc.nextInt();
			
            Solution ob = new Solution();
            long ans  = ob.sumOfSubsets(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to calculate the sum of all subsets for a given number N
    static long sumOfSubsets(int N) {
        // Calculate the sum of subsets using the formula (N*(N+1)/2) * 2^(N-1)
        return (long)(N * (N + 1) / 2 * Math.pow(2, N - 1));
    }
}
