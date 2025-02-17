//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.checkPerfectSquare(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if N is a perfect square
    static int checkPerfectSquare(int N) {
        // Loop through numbers starting from 2 to check for a perfect square
        for (int i = 2; i * i <= N; i++) {
            // If i*i equals N, then N is a perfect square
            if (i * i == N) {
                return 1;
            }
        }
        // If no perfect square is found, return 0
        return 0;
    }
}
