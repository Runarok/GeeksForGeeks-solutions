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
            Long n = Long.parseLong(br.readLine().trim());
            Solution ob = new Solution();
            String ans = ob.is_power_of_eight(n);
            System.out.println(ans);
        }
	}
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public String is_power_of_eight(Long n) {
        // If n is less than 8, it cannot be a power of 8
        if (n < 8) {
            return "No";
        }
        
        // Keep dividing n by 8 as long as it is greater than 1
        while (n > 1) {
            long r = n % 8;
            
            // If the remainder is not 0, n is not a power of 8
            if (r != 0) {
                return "No";
            }
            
            // Divide n by 8
            n /= 8;
        }
        
        // If we reach here, it means n is a power of 8
        return "Yes";
    }
}
