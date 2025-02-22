//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.CountNo(n);
            System.out.println(ans);           
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count the numbers from 1 to N that contain at least one zero
    static int CountNo(int N) {
        int count = 0;  // Initialize the count to 0

        // Iterate through all numbers from 1 to N
        for (int i = 1; i <= N; i++) {
            // Check if the current number contains a zero
            if (hasZero(i)) {
                count++;  // If yes, increment the count
            }
        }

        // Return the total count of numbers with at least one zero
        return count;
    }

    // Function to check if a number contains a zero
    static boolean hasZero(int num) {
        // Keep dividing the number by 10 and check the remainder
        while (num > 0) {
            // If the remainder is 0, the number contains a zero
            if (num % 10 == 0) {
                return true;
            }
            // Remove the last digit of the number
            num /= 10;
        }

        // Return false if no zero is found
        return false;
    }
}
