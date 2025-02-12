//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {   
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int n = sc.nextInt();

            Solution ob = new Solution();
            System.out.println(ob.countZero(n));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to calculate the number of zeros in numbers up to a given number of digits
    static int zeroUpto(int digits) {
        int first = (int) ((Math.pow(10, digits) - 1) / 9);  // Number formed by repeated '1's (e.g., 111...1)
        int second = (int) ((Math.pow(9, digits) - 1) / 8);  // Number formed by repeated '8's (e.g., 888...8)
        return 9 * (first - second);  // Count of numbers with trailing zeros up to the given digit length
    }
    
    // Function to convert a character into its integer equivalent
    static int toInt(char c) {
        return (int)(c) - 48;  // Convert ASCII value to integer (e.g., '0' -> 0, '1' -> 1)
    }

    // Function to count the number of zeros in the given number N
    static int countZero(int N) {
        String num = String.valueOf(N);  // Convert the number to a string
        int k = num.length();  // Get the number of digits in the number

        // Calculate total zeros for all numbers with fewer digits
        int total = zeroUpto(k - 1);

        int non_zero = 0;  // Track non-zero contributions to the count
        for (int i = 0; i < num.length(); i++) {
            if (num.charAt(i) == '0') {
                non_zero--;  // If '0' is encountered, subtract from non_zero count
                break;
            }

            // Calculate the number of non-zero possibilities for the current digit
            non_zero += (toInt(num.charAt(i)) - 1) * (Math.pow(9, k - 1 - i));
        }

        int no = 0, remaining = 0, calculatedUpto = 0;

        // Calculate the actual number from the string representation
        for (int i = 0; i < num.length(); i++) {
            no = no * 10 + (toInt(num.charAt(i)));  // Reconstruct the number
            if (i != 0)
                calculatedUpto = calculatedUpto * 10 + 9;  // Calculate number upto the current place
        }
        
        // Calculate the remaining numbers after the last valid digit
        remaining = no - calculatedUpto;

        // Return the total number of zeros in the given number N
        int ans = zeroUpto(k - 1) + (remaining - non_zero - 1);
        return ans;
    }
}
