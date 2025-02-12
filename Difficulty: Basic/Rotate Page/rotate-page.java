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
            String[] input = new String[6]; 
            input = br.readLine().split(" "); 
            int a1 = Integer.parseInt(input[0]); 
            int a2 = Integer.parseInt(input[1]); 
            int b1 = Integer.parseInt(input[2]); 
            int b2 = Integer.parseInt(input[3]); 
            int c1 = Integer.parseInt(input[4]);
            int c2 = Integer.parseInt(input[5]);
            Solution ob = new Solution();
            System.out.println(ob.possibleOrNot(a1,a2,b1,b2,c1,c2));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int possibleOrNot(int a1, int a2, int b1, int b2, int c1, int c2) {
        // Calculate squared distances between points
        double distanceAB = Math.pow(b1 - a1, 2) + Math.pow(b2 - a2, 2);
        double distanceBC = Math.pow(c1 - b1, 2) + Math.pow(c2 - b2, 2);

        // Check if the distances are equal
        return (distanceAB == distanceBC) ? 1 : 0;
    }
}
