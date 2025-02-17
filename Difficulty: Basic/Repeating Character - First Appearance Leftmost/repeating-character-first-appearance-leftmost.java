//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class Driverclass
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            String str = sc.next();
            int index = new Solution().repeatedCharacter(str);
            if(index == -1)
                System.out.println("-1");
            else
                System.out.println(str.charAt(index));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to find the repeated character whose first appearance is leftmost.
    static int repeatedCharacter(String S)
    {
        // Initialize an array to store the frequency of each character
        int[] a = new int[256];
        
        // Loop through the string to count the occurrences of each character
        for (int i = 0; i < S.length(); i++) {
            a[S.charAt(i)]++;
        }

        // Loop again through the string to find the first character that appears more than once
        for (int i = 0; i < S.length(); i++) {
            if (a[S.charAt(i)] > 1) {
                // Return the index of the first repeated character
                return i;
            }
        }

        // If no repeated character is found, return -1
        return -1;
    }
}
