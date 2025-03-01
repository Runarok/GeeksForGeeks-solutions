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
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            
            System.out.println(ob.countWays(n));
        }
    }
}
// } Driver Code Ends

class Solution {
    
    static final int MOD = 1000000007;

    // Function to calculate the number of ways to select 3 numbers from 1 to N
    int countWays(int N) {
        // Calculate count of odd and even numbers
        int oddCount = (N + 1) / 2; 
        int evenCount = N / 2;

        // Calculate ways to choose 3 even numbers
        long waysEven = (long) evenCount * (evenCount - 1) * (evenCount - 2) / 6;

        // Calculate ways to choose 2 odd numbers and 1 even number
        long waysMixed = (long) evenCount * oddCount * (oddCount - 1) / 2;
        
        // Return the total ways mod 1000000007
        return (int) ((waysEven + waysMixed) % MOD);
    }
}
