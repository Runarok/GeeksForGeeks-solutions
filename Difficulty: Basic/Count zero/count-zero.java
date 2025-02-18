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
            long d = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.findCountUpto(d));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long findCountUpto(long d) {
        // Calculate the total number up to 10^d - 1
        long total = (long) Math.pow(10, d) - 1;
        
        // Subtract (9^d) for each digit length from d down to 1
        while (d > 0) {
            total = total - (long) Math.pow(9, d);
            d--;
        }
        
        return total;
    }
}
