//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main(String args[])throws IOException
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    String N = sc.next();
                    int P = sc.nextInt();
                    Solution ob = new Solution();
                    if(ob.unitDigit(N, P)==true)
                        System.out.println(1);
                    else
                        System.out.println(0);
                }
        }
}
// } Driver Code Ends

//User function Template for Java

class Solution
{
    // Function to check if the unit digit of N raised to power P is same as the unit digit of N
    boolean unitDigit(String N, int p)
    {
        // Extract the last character (unit digit) from the string N
        char lastChar = N.charAt(N.length() - 1);
        int unitDigit = lastChar - '0'; // Convert character to integer (unit digit of N)

        // Special case: if power p is 0, then N^0 = 1, so we check if unit digit of N is 1
        if (p == 0) {
            return unitDigit == 1; 
        }

        // Variable to calculate the unit digit of N^p
        int currentUnitDigit = unitDigit;

        // Repeatedly multiply the unit digit to itself (p-1 times)
        for (int i = 1; i < p; i++) {
            currentUnitDigit = (currentUnitDigit * unitDigit) % 10; // Only keep the unit digit
        }

        // Compare the calculated unit digit of N^p with the original unit digit of N
        return currentUnitDigit == unitDigit;
    }
}
