//{ Driver Code Starts

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
            int ans = ob.find_xor(n);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to calculate XOR of the number of set bits and unset bits in the binary representation of N
    int find_xor(int N) {
        // Initialize counters for set bits and unset bits
        int set_bit_count = 0;
        int unset_bit_count = 0;
        
        // Loop through the bits of N
        while (N > 0) {
            // If the least significant bit is 1, increment the set bit count
            if ((N & 1) == 1) {
                set_bit_count++;
            } else {
                // If the least significant bit is 0, increment the unset bit count
                unset_bit_count++;
            }
            
            // Right shift N by 1 to process the next bit
            N = N >> 1;
        }
        
        // Return the XOR of the set bit count and unset bit count
        return set_bit_count ^ unset_bit_count;
    }
}
