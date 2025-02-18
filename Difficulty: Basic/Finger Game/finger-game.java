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
            int ans = ob.fingerCount(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution{
    // Function to calculate the finger count based on the number N
    static int fingerCount(int N){
        // Calculate the remainder when N is divided by 8
        int r = N % 8;
        
        // If the remainder is 0, return 2 (as it's the 8th position)
        if (r == 0)
            return 2;
        
        // If the remainder is less than 5, return the remainder itself (direct mapping)
        if (r < 5)
            return r;
        
        // If the remainder is greater than or equal to 5, return the inverse of the remainder (mapping from 6 to 7)
        else
            return 10 - r;
    }
}
