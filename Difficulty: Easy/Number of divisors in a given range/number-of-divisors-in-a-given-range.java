//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            int m = Integer.parseInt(S[0]);
            int n = Integer.parseInt(S[1]);
            int a = Integer.parseInt(S[2]);
            int b = Integer.parseInt(S[3]);

            Solution ob = new Solution();
            System.out.println(ob.numOfDiv(m,n,a,b));
        }
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to count the numbers divisible by either a or b in the range [m, n].
     * @param m - The starting number of the range.
     * @param n - The ending number of the range.
     * @param a - The first divisor.
     * @param b - The second divisor.
     * @returns int - The count of numbers in the range [m, n] divisible by either a or b.
     */
    static int numOfDiv(int m, int n, int a, int b) {
        int ans = 0;
        
        // Iterate through the range from m to n
        for (; m <= n; m++) {
            // Check if the current number is divisible by a or b
            if (m % a == 0 || m % b == 0) {
                ans++;  // Increment the count if divisible by a or b
            }
        }
        
        // Return the final count of divisible numbers
        return ans;
    }
}
