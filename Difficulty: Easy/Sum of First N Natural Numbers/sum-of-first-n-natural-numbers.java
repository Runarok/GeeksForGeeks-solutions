//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");

            int n = Integer.parseInt(S[0]);

            Solution ob = new Solution();
            System.out.println(ob.sumOfNaturals(n));

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the sum of first 'n' natural numbers.
    static int sumOfNaturals(int n) {
        // Variable to store the sum of natural numbers.
        int sum = 0;

        // Loop through numbers from 1 to n and add each to the sum.
        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        // Return the calculated sum.
        return sum;
    }
};
