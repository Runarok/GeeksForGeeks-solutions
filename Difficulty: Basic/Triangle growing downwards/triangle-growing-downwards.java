//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String str = read.readLine();
   
            Solution ob = new Solution();
            ob.printTriangleDownwards(str);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    static void printTriangleDownwards(String inputString) {
        // Get the length of the input string
        int length = inputString.length();
        
        // Loop through each row of the pattern
        StringBuilder prefix = new StringBuilder();
        for (int row = 0; row < length; row++) {
            prefix.append(inputString.charAt(row));

            // Construct the leading dots for the current row
            StringBuilder leadingDots = new StringBuilder();
            for (int j = length - 1; j > row; j--) {
                leadingDots.append(".");
            }

            // Print the current pattern row
            System.out.println(leadingDots.toString() + prefix.toString());
        }
    }
}
