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
            String[] input = new String[2]; 
            input = read.readLine().split(" "); 
            long N = Integer.parseInt(input[0]); 
            long K = Integer.parseInt(input[1]);
            Solution ob = new Solution();

            System.out.println(ob.nthDayPage(N,K));
        }
    }
}
// } Driver Code Ends

class Solution {
    static long nthDayPage(long N, long K){
        // Initialize the modulus to prevent overflow
        long x = 1000000007;

        // Initialize noOfPages as 1, representing the number of pages on day 1
        long noOfPages = 1;

        // Loop from day 2 to N to calculate the total pages for the Nth day
        for(int i = 1; i < N; i++){
            // Update noOfPages by multiplying with K, and take modulo x to avoid overflow
            noOfPages = (noOfPages * K) % x;
        }

        // Return the total number of pages on the Nth day
        return noOfPages;
    }
}
