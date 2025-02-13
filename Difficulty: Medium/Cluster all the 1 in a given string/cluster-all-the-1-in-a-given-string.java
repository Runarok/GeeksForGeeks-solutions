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
            String s = br.readLine().trim();
             Solution ob = new Solution();
            int ans = ob.minimumMoves(s);
            System.out.println(ans);         
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int minimumMoves(String s1) {
        int n = s1.length();
        char[] s = s1.toCharArray(); 

        int totalZeros = 0; // Count of all zeros in the string
        int maxConsecutiveZeros = 0; // Maximum consecutive zeros found
        int currentConsecutiveZeros = 0; // Current consecutive zeros counter

        // Count total zeros and find max consecutive zeros in the middle
        for (int i = 0; i < n; i++) {
            if (s[i] == '0') {
                totalZeros++; // Increment total zero counter
                currentConsecutiveZeros++; // Increment consecutive zero counter
            } else {
                currentConsecutiveZeros = 0; // Reset consecutive zero counter
            }
            maxConsecutiveZeros = Math.max(maxConsecutiveZeros, currentConsecutiveZeros);
        }

        currentConsecutiveZeros = 0; // Reset consecutive zero counter

        int i = 0;
        // Count leading zeros from the start
        while (i < n && s[i] == '0') {
            currentConsecutiveZeros++;
            i++;
        }

        i = n - 1;
        // Count trailing zeros from the end
        while (i >= 0 && s[i] == '0') {
            currentConsecutiveZeros++;
            i--;
        }

        maxConsecutiveZeros = Math.max(maxConsecutiveZeros, currentConsecutiveZeros); // Update max consecutive zeros

        return totalZeros - maxConsecutiveZeros; // Return minimum moves required to remove all zeros
    }
}
