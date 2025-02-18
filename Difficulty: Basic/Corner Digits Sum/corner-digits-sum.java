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
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.corner_digitSum(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to calculate the sum of the first and last digits of a number
    public int corner_digitSum(int n)
    {
        // Extract the last digit by using modulo 10
        int lastdigit = n % 10;
        
        // Extract the first digit by continuously dividing by 10 until the value is less than 10
        int firstdigit = n / 10;
        while (firstdigit >= 10) {
            firstdigit /= 10;
        }

        // Calculate the sum of the first and last digits
        int sum = firstdigit + lastdigit;

        // Return the calculated sum
        return sum;
    }
}
