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
        PrintWriter out=new PrintWriter(System.out);
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int[] ans = ob.leastPrimeFactor(n);
            for(int i = 1; i <=n; i++)
            {
                out.print(ans[i] + " ");
            }
            out.println();
        
out.println("~");
}
        out.close();
    }
}

// } Driver Code Ends

class Solution
{
    public int[] leastPrimeFactor(int n)
    {
        // Initialize the answer array where each index holds the number itself initially.
        int ans[] = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            ans[i] = i;
        }
        
        // Loop to find the least prime factor for each number.
        for (int i = 2; i * i <= n; i++) {
            // If 'i' is a prime number (it has not been updated yet)
            if (ans[i] == i) {
                // Update the least prime factor for multiples of 'i'
                for (int j = i * i; j <= n; j += i) {
                    ans[j] = Math.min(ans[j], i); // Update with the smaller prime factor
                }
            }
        }
        
        return ans; // Return the array with least prime factors
    }
}
