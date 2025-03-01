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
            int N = Integer.parseInt(S[0]);
            int K = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            int[] ans = ob.daysOfWeeks(N,K);
        
            for(int i=0 ; i<7 ; i++)
            {
                System.out.print(ans[i]);
                if(i<6)
                    System.out.print(' ');
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Solution {
    static int[] daysOfWeeks(int N, int K) {
        // Initialize an array to store the count of days for each weekday
        int[] days = new int[7];

        // Calculate how many days will be left after dividing N by 7
        int remaining = N % 7;

        // Calculate how many complete weeks there are
        int base = N / 7;

        // Iterate over the 7 days of the week
        for (int i = 0; i < 7; i++) {
            // Assign the number of occurrences for each day, 
            // accounting for the remaining days
            days[(K + i - 1) % 7] = base + (i < remaining ? 1 : 0);
        }

        // Return the final array of days
        return days;
    }
}
