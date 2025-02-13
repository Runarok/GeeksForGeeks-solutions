//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.numberOfConsecutiveOnes(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    private static final int M = (int) 1e9 + 7;
    
    // Function to calculate the number of consecutive ones.
    static int numberOfConsecutiveOnes(int n) {
        // If n is less than or equal to 1, return 0 as there are no consecutive ones
        if (n <= 1) return 0;
        
        long n1 = 2; // The first number in the Fibonacci sequence
        long n2 = 1; // The second number in the Fibonacci sequence
        long total = 2; // Total will accumulate the result
        int i = 1; // Counter for iterations

        // Loop through the Fibonacci sequence to calculate the number of consecutive ones
        while (i++ < n) {
            long curr = (n1 + n2) % M; // Calculate the current Fibonacci number modulo M
            n2 = n1; // Update n2 to the previous Fibonacci number
            n1 = curr; // Update n1 to the current Fibonacci number
            total = total * 2 % M; // Multiply total by 2 and take modulo M
        }
        
        int rv = (int) (total - n1); // Calculate the result by subtracting the final Fibonacci number
        if (rv < 0) rv += M; // Adjust for negative results to ensure a positive value
        
        return rv; // Return the final result
    }
}
