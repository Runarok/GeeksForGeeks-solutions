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
            System.out.println(ob.isFactorial(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if a number N is a factorial of some integer
    static int isFactorial(int N) {
        // Initialize the factorial value and the counter
        int fact = 1;
        int i = 1;

        // Loop to calculate the factorials and compare with N
        while (fact <= N) {
            if (fact == N) {
                // If the current factorial matches N, return 1
                return 1;
            }
            i++;  // Increment the counter
            fact = fact * i;  // Calculate the next factorial
        }
        
        // If no factorial matches N, return 0
        return 0;
    }
}
