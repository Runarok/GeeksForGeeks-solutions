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
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int L = Integer.parseInt(input[0]); 
            int R = Integer.parseInt(input[1]); 
            Solution ob = new Solution();
            int[] ans = ob.primeTwins(L,R);
            for(int i = 0; i < ans.length; i++)
            {
                System.out.print(ans[i] + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int[] primeTwins(int L, int R) {
        // Create a sieve array to mark prime numbers
        int[] sieve = new int[1001];
        
        // Mark non-prime numbers using the Sieve of Eratosthenes
        for (int i = 2; i <= Math.sqrt(1000); i++) {
            if (sieve[i] == 0) {
                for (int j = i * i; j <= 1000; j += i) {
                    sieve[j] = 1; // Mark as non-prime
                }
            }
        }

        // Check for prime twins in the range [L, R]
        for (int i = Math.max(L, 2); i <= R - 2; i++) {
            if (sieve[i] == 0 && sieve[i + 2] == 0) {
                return new int[]{i, i + 2}; // Return the prime twin pair
            }
        }

        return new int[]{-1}; // Return [-1] if no prime twins are found
    }
}
