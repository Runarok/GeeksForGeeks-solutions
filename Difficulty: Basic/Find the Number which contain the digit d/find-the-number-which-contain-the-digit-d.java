//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;


class GfG
{
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while(t-->0)
                {
                    int n=sc.nextInt();
                    int d=sc.nextInt();
                    Solution obj = new Solution();
                    
                    Vector<Integer> v= obj.solve(n,d);
                    
                    for (int i = 0; i < v.size(); i++) 
                        System.out.print(v.get(i) + " ");
                        
                    System.out.println();
                }
                
        }
}

// } Driver Code Ends


//User function Template for Java

class Solution
{
    public Vector<Integer> solve(int n, int d)
    {
        // Create a Vector to store the result
        Vector<Integer> v = new Vector<>();
        
        // Iterate through all numbers from 0 to n
        for(int i = 0; i <= n; i++)
        {
            // Convert current number and digit to string
            String s = Integer.toString(i);
            String f = Integer.toString(d);
            
            // Check if the number contains the digit d
            if(s.contains(f))
            {
                v.add(i);  // Add to the result vector if condition is met
            }
        }
        
        // If no numbers found, add -1 to the vector
        if(v.size() == 0)
        {
            v.add(-1);
        }
        
        return v;  // Return the result vector
    }
}
