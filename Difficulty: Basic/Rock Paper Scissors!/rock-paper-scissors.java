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
            String s;
            s = sc.next();
            
            Solution ob = new Solution();
            
            System.out.println(ob.gameResult(s));    
        }
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution
{
    String gameResult(String s)
    {
        // your code here
        char c1 = s.charAt(0); // Get the first player's choice
        char c2 = s.charAt(1); // Get the second player's choice

        // Check if both players have chosen the same
        if (c1 == c2) {
            return "DRAW"; // If it's a draw, return "DRAW"
        } 
        // Check if Player A wins based on the game rules (Rock > Scissors, Scissors > Paper, Paper > Rock)
        else if (c1 == 'R' && c2 == 'S' || c1 == 'S' && c2 == 'P' || c1 == 'P' && c2 == 'R') {
            return "A"; // Return "A" if Player A wins
        } else {
            return "B"; // Return "B" if Player B wins
        }
    }
}
