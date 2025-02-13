//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int M = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.costOfSweets(M));
        }
    }
}
// } Driver Code Ends


class Solution {
    // Function to calculate the cost of sweets based on the given integer M
    static int costOfSweets(int M) {
        // If M is either 4k + 1 or 4k, return the formula (M + (M + 2)) / 4
        if (M % 4 == 1 || M % 4 == 0)
            return (M + (M + 2)) / 4;
        
        // Otherwise, if M is 4k + 3, return the formula (M + (M - 2)) / 4
        return (M + (M - 2)) / 4;
    }
}
