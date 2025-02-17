//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            long n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.nisDoryOrNot(n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution {
    static long nisDoryOrNot(long n){
        // code here
        // Check if (5n - 4) or (5n + 4) is a perfect square
        long x = 5*n - 4;
        long y = 5*n + 4;
        
        // Calculate the square roots of x and y
        long x1 = (long)Math.sqrt(x);
        long y1 = (long)Math.sqrt(y);
        
        // Check if either x or y is a perfect square
        if(x1 * x1 == x || y1 * y1 == y){
            return 1;  // Return 1 if either is a perfect square
        }
        return 0;  // Return 0 if neither is a perfect square
    }
}
