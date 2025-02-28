//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

// } Driver Code Ends

// User function Template for Java

class Solution {
    static int findLastOccurence(String A, String B) {
        // Find the last occurrence index of string B in string A
        int lastIndex = A.lastIndexOf(B);

        // If B is not found in A, return -1
        // Otherwise, return the 1-based position (hence +1)
        return (lastIndex == -1) ? -1 : lastIndex + 1;
    }
}



//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            
            String A = read.readLine().trim();
             String B = read.readLine().trim();
          

            Solution ob = new Solution();
            System.out.println(ob.findLastOccurence(A,B));
        }
    }
}
// } Driver Code Ends