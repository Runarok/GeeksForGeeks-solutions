//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;


class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String S = sc.next();
                    int R = sc.nextInt();
                    int N = sc.nextInt();
                    Solution obj = new Solution();
                    System.out.println(obj.nthCharacter(S,R,N));
                
System.out.println("~");
}
                
        }
}

// } Driver Code Ends

class Solution {
    // Function to return the nth character after flipping bits based on the given r value
    public char nthCharacter(String s, int r, int n) {
        // Calculate the original index of the character in the string after dividing by 2^r
        int originalIndex = n / (1 << r);  
        char originalChar = s.charAt(originalIndex);  // Get the character at the calculated index

        // Count the number of flips that should happen based on the bitwise representation of n
        int flipCount = 0;
        for (int i = 0; i < r; i++) {
            if ((n & (1 << i)) != 0) {  // Check if the ith bit in n is set to 1
                flipCount++;
            }
        }

        // If the flip count is even, return the original character, otherwise flip the character
        if (flipCount % 2 == 0) {
            return originalChar;  // No flip required
        } else {
            // Flip the character: if '0' change to '1' and vice versa
            return (originalChar == '0') ? '1' : '0';  
        }
    }
}
