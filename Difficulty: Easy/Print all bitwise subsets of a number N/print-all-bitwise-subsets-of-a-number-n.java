//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        
        Solution ob = new Solution();
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split("\\s+");
            int N = Integer.parseInt(input_line[0]);
            ArrayList<Integer> ans = new ArrayList<Integer>();
            ans = ob.printSubsets(N);
            for(int i: ans)
                System.out.print(i + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    
    ArrayList<Integer> printSubsets(int N) {
        // Result list to store unique AND results
        ArrayList<Integer> res = new ArrayList<>();
        
        // Set to track already seen AND values
        HashSet<Integer> seen = new HashSet<>();
        
        // Check AND of N with all numbers from N to 0
        for (int i = N; i >= 0; i--) {
            int d = N & i;
            
            // Add to result only if not already present
            if (!seen.contains(d)) {
                res.add(d);
                seen.add(d);
            }
        }
        
        // Return the result
        return res;
    }
}
