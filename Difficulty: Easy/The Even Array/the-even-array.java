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
                    String S = sc.next();
                    Solution ob = new Solution();
                    System.out.println(ob.convertToEven(S));
                }
        }
}
// } Driver Code Ends

//User function Template for Java

class Solution{
    public int convertToEven(String s){
        // Variable to count the number of segments of consecutive 'O's
        int count = 0;

        // Length of the input string
        int n = s.length();

        // Iterate through the string to find segments of 'O'
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == 'O') {
                // Move ahead to skip consecutive 'O's within the same segment
                while (i < n && s.charAt(i) == 'O') {
                    i++;
                }
                // One complete segment found
                count++;
            }
        }

        // Return the number of segments found
        return count;
    }
}
