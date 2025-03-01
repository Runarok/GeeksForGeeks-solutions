//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main (String[] args)
    {
        
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int n = sc.nextInt();
            int[] vac = new int[n];
            int[] per = new int[n];
            
            for (int i = 0; i < n; ++i)
                vac[i] = sc.nextInt ();
            for (int i = 0; i < n; ++i)
                per[i] = sc.nextInt ();

    		System.out.println (new Solution().isPossible (per, vac, n));
        
System.out.println("~");
}
        
    }
}

// Contributed By: Pranay Bansal
// } Driver Code Ends

//User function Template for Java

class Solution
{
    public static int isPossible (int per[], int vac[], int n)
    {
        // Sorting both the arrays to compare the values in ascending order
        Arrays.sort(per);
        Arrays.sort(vac);

        // Check if for every person, their required capacity is less than or equal to the available capacity
        for(int i = 0; i < n; i++) {
            if(per[i] > vac[i]) { // If the required capacity is greater than the available capacity, return 0
                return 0;
            }
        }
        
        // If no condition failed, return 1, indicating it's possible
        return 1;
    }
}
