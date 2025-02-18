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
            long N=sc.nextLong();
			
            
            Solution ob = new Solution();
            long ans  = ob.jumpyBall(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to calculate the jumpy ball height for a given number N
    static long jumpyBall(long N) {
        // Variable to store the total height
        long height = 0;

        // Loop while N is greater than 0
        while (N > 0) {
            // Add twice the current value of N to the height
            height += N + N;

            // Halve the value of N in each iteration
            N /= 2;
        }

        // Return the total calculated height
        return height;
    }
}
