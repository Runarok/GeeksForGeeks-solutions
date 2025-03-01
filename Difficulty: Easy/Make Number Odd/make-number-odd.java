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
            int ans  = ob.makeNumberOdd(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

//User function Template for Java
class Solution {
    static int makeNumberOdd(int N) {
        // If N is already odd, return 1
        if (N % 2 != 0) {
            return 1;
        }
        
        int pow = 1;
        
        // Keep dividing N by 2 until it becomes odd, and keep track of the power of 2
        while (N % 2 == 0) {
            N /= 2;
            pow *= 2;
        }
        
        return pow;  // Return the power of 2 that was divided out
    }
}
