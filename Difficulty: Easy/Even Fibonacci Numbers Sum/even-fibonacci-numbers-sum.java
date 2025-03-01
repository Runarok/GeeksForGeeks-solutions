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
            long N =Long.parseLong(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.evenFibSum(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    // Function to calculate the sum of even Fibonacci numbers up to N
    static long evenFibSum(long N){
        // Modulo value to prevent overflow
        final long MOD = 1000000007;
        
        // Initialize the first two Fibonacci numbers
        long previousFib = 0;
        long currentFib = 1;
        
        // Variable to store the sum of even Fibonacci numbers
        long sum = 0;

        // If the first Fibonacci number (0) is even, add it to the sum
        if (previousFib % 2 == 0) sum = previousFib;

        // Iterate through the Fibonacci sequence until the current number exceeds N
        while(currentFib <= N){
            // Compute the next Fibonacci number
            long nextFib = (previousFib + currentFib) % MOD;
            
            // Update previous and current Fibonacci numbers
            previousFib = currentFib;
            currentFib = nextFib;
            
            // If the previous Fibonacci number is even, add it to the sum
            if(previousFib % 2 == 0){
                sum = (sum + previousFib) % MOD;
            }
        }
        // Return the sum of even Fibonacci numbers, modulo MOD
        return sum;
    } 
}
