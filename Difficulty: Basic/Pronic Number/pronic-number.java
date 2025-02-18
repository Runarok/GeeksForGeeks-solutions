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
            int N=sc.nextInt();
			
            
            Solution ob = new Solution();
            
            ArrayList<Integer> ans = ob.pronicNumbers(N);
            for (Integer val: ans) 
                System.out.print(val+" "); 
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Solution {
    static ArrayList<Integer> pronicNumbers(int N) {
        // Create an ArrayList to store the pronic numbers
        ArrayList<Integer> list = new ArrayList<>();
        
        int i = 0;
        int prod = 1;
        
        // Iterate and calculate pronic numbers until it exceeds N
        while (i < N) {
            prod = i * (i + 1);
            if (prod <= N) {
                list.add(prod);  // Add pronic number to list
            } else {
                break;  // Stop if the pronic number exceeds N
            }
            i++;  // Increment i for next pronic number
        }
        
        return list;  // Return the list of pronic numbers
    }
}
