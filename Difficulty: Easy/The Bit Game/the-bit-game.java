//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            long N;
            N = Long.parseLong(br.readLine().trim());
            
            Solution obj = new Solution();
            int res = obj.swapBitGame(N);
            
            System.out.println(res);
            
        }
    }
}



// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to determine the winner of the swap bit game based on the number of set bits in N.
    public static int swapBitGame(long N) {
        long cpy = N;  // Make a copy of the original number.
        long bitMask = 1;  // Bit mask to check each bit.
        int counter = 0;  // Counter to track the number of set bits (1s).
        
        // Loop through each bit of the number until the number becomes zero.
        while (cpy != 0) {
            // Check if the current bit is set (1).
            if ((cpy & bitMask) == 1)
                counter++;  // Increment the counter if the bit is 1.
            
            // Shift the number to the right to check the next bit.
            cpy = cpy >> 1;
        }
        
        // If the number of set bits is odd, player 1 wins, else player 2 wins.
        if ((counter & 1) == 1)
            return 1;  // Player 1 wins.
        
        return 2;  // Player 2 wins.
    }
}
