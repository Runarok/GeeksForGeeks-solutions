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
            int N = sc.nextInt();
            Solution ob = new Solution();
            int ans = ob.differenceSeries(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Method to calculate the difference series for a given N
    static int differenceSeries(int N) {
        // Initializing variables
        int i = 3, sum = 0, j, ans = 0;
        
        // Loop through from 1 to N
        for (j = 1; j <= N; j++) {
            // Update the answer with the current sum
            ans = sum + i;
            
            // Update sum with the current value of i
            sum = sum + i;
            
            // Increment i by 4 for the next iteration
            i = i + 4;
        }
        
        // Return the final result
        return ans;
    }
}
