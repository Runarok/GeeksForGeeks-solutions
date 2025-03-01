//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- >0){
            String a[] = in.readLine().trim().split("\\s+");
            int N = Integer.parseInt(a[0]);
            int V1 = Integer.parseInt(a[1]);
            int V2 = Integer.parseInt(a[2]);
            int V3 = Integer.parseInt(a[3]);
            
            Solution ob = new Solution();
            System.out.println(ob.fastest(N, V1, V2, V3));
        }
    }
}
// } Driver Code Ends

class Solution{
    static int fastest(int N, int V1, int V2, int V3)
    {
        // Calculate the time taken using the lift
        double liftTime = N * 1.0 / (V1 * 1d);
        
        // Calculate the time taken using the stairs (assuming the stairs form a diagonal)
        double stairsTime = N * Math.sqrt(2) / V2;
        
        // Calculate the time taken using the escalator (assuming it also forms a diagonal)
        double escalatorTime = N * Math.sqrt(2) / V3;
        
        // Compare the times and return the method that takes the least time
        if (liftTime <= stairsTime && liftTime <= escalatorTime)
            return 1;  // Lift is the fastest
        else if (stairsTime <= liftTime && stairsTime <= escalatorTime)
            return 2;  // Stairs are the fastest
        return 3;  // Escalator is the fastest
    }
}
