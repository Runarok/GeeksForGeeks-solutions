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
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            long k = sc.nextLong();

            Solution ob = new Solution();
            System.out.println(ob.minX(a, b, c, k));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int minX(int a, int b, int c, long k) {
        // Initialize the index and the value of the equation
        int i = -1;
        long val = 0;

        // Loop to find the minimum value of i where the equation's result exceeds k
        while (val < k) {
            i++; // Increment the index
            val = a * (i * i) + b * i + c; // Calculate the value of the quadratic equation
        }

        // Return the minimum value of i where the condition is satisfied
        return i;
    }
}
