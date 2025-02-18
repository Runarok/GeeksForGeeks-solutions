//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = ob.compositeNumbers(N);
            StringBuilder out = new StringBuilder();
            for(int i = 0;i < ans.size();i++)
                out.append(ans.get(i)+" ");
            System.out.println(out);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution{
    static List<Integer> compositeNumbers(int N)
    {
        // Initialize an ArrayList to store composite numbers
        ArrayList<Integer> compositeList = new ArrayList<>();
        
        // Loop through numbers from 4 to N
        for (int i = 4; i <= N; i++) {
            // Check if the current number 'i' is divisible by any number less than 'i'
            for (int j = 2; j < i; j++) {
                // If 'i' is divisible by 'j', it is a composite number
                if (i % j == 0) {
                    compositeList.add(i);
                    break; // No need to check further divisors, move to the next number
                }
            }
        }
        
        // Return the list of composite numbers
        return compositeList;
    }
}
