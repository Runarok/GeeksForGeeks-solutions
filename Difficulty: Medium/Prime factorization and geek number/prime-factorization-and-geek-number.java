//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            if(ob.geekNumber(N) == 1)
                System.out.println("Yes");
            else
                System.out.println("No");
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    static int geekNumber(int N) {
        int i = 2;

        // Iterate through possible divisors
        while (i * i <= N) {
            int count = 0;

            // Count the occurrences of factor i in N
            while (N % i == 0) {
                N /= i;
                count++;
            }

            // If any factor appears more than once, return 0 (not a geek number)
            if (count > 1) {
                return 0;
            }

            i++;
        }

        // If no prime factor appears more than once, it's a geek number
        return 1;
    }
}
