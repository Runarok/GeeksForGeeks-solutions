//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            String arr[] = read.readLine().trim().split("\\s+");
            int N = Integer.parseInt(arr[0]);
            int X = Integer.parseInt(arr[1]);

            Solution ob = new Solution();
            System.out.println(ob.waitingTime(N, X));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution{
    static int waitingTime(int N, int X){
        // If X is greater than 10, no waiting time is calculated
        if (X > 10) {
            return 0;
        } else {
            // Calculate waiting time as (N - 1) times (10 - X)
            return ((N - 1) * (10 - X));
        }
    }
}
