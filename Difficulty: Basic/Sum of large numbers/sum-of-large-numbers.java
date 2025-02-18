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
            String s1 = br.readLine().trim();
            String s2 = br.readLine().trim();
            Solution ob = new Solution();
            String ans = ob.add(s1, s2);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

class Solution {
    
    public String add(String s1, String s2) {
    
        // Ensure s1 is the shorter string for easier manipulation
        if (s1.length() > s2.length()) {
            String temp = s2;
            s2 = s1;
            s1 = temp;
        }

        // Add leading zeros to s1 to match the length of s2
        int rem = s2.length() - s1.length();
        s1 = "0".repeat(rem) + s1;
        
        StringBuilder ans = new StringBuilder();
        int carry = 0;

        // Iterating from right to left over the digits of the strings
        for (int i = s1.length() - 1; i >= 0; i--) {
            // Convert the current digits of s1 and s2 to integers and add them
            int sum = (s1.charAt(i) - '0') + (s2.charAt(i) - '0') + carry;

            // Compute the new carry and the sum's digit
            carry = sum / 10;
            sum %= 10;

            // Append the sum digit to the answer string
            ans.append((char) (sum + '0'));
        }

        // If there is still a carry left, append it to the answer string
        if (carry > 0) {
            ans.append((char) (carry + '0'));
        }

        // Reverse the answer string to get the correct result
        return ans.reverse().toString();
    }
}
