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
            int ans = ob.is_bleak(n);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    public int is_bleak(int n) {
        // Ensure that the input is positive
        if (n <= 0) {
            throw new IllegalArgumentException("Invalid input");
        }

        // Iterate over different bit lengths (representing the number of bits)
        for (int bits = 1; ((int) Math.pow(2, bits)) - 1 < n; ++bits) {
            int bitsCount = 0;

            // Check how many 1s are there in the binary representation of n - bits
            for (int potAns = n - bits; potAns > 0; potAns >>= 1) {
                if ((potAns & 1) != 0) {
                    ++bitsCount; // Increment count if a 1 is found
                }
            }

            // If the count of 1s is equal to the number of bits, it is not bleak
            if (bitsCount == bits) {
                return 0;
            }
        }

        // Return 1 if no condition met, meaning the number is bleak
        return 1;
    }
}
