//{ Driver Code Starts
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
            System.out.println(ob.facDigits(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to calculate the number of digits in N!
    static int facDigits(int N) {
        // If N is 0 or 1, the factorial is 1, which has 1 digit
        if (N == 0 || N == 1) return 1;
        
        // Variable to store the sum of log10 of all numbers from 2 to N
        double logSum = 0;
        
        // Loop through all numbers from 2 to N and accumulate the log10 values
        for (int i = 2; i <= N; i++) {
            logSum += Math.log10(i);
        }
        
        // The number of digits is the floor of the log sum + 1
        return (int) Math.floor(logSum) + 1;
    }
}
