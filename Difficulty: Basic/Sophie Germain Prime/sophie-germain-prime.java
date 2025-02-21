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
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int[] ans = ob.sophie_Primes(n);
            for(int i = 0; i < ans.length; i++)
                System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    public int[] sophie_Primes(int n)
    {
        // Initialize a boolean array to mark prime numbers up to 2*n
        boolean[] arr = new boolean[2 * n + 1];
        Arrays.fill(arr, true);  // Assume all numbers are prime initially
        arr[0] = false;  // 0 is not a prime
        arr[1] = false;  // 1 is not a prime
        
        // Sieve of Eratosthenes to mark non-prime numbers
        for(int i = 2; i * i <= (2 * n); i++) {
            if(arr[i] == true) {
                for(int j = i * i; j <= (2 * n); j += i) {
                    arr[j] = false;
                }
            }
        }
        
        // ArrayList to store the Sophie Germain primes
        ArrayList<Integer> al = new ArrayList<>();
        
        // Check for Sophie Germain primes (where both i and 2*i + 1 are prime)
        for(int i = 2; i < n; i++) {
            if(arr[i] && arr[2 * i + 1]) {
                al.add(i);  // Add Sophie Germain prime to the list
            }
        }
        
        // Convert the ArrayList to an array and return it
        int[] ans = new int[al.size()];
        for(int i = 0; i < al.size(); i++) {
            ans[i] = al.get(i);
        }
        return ans;
    }
}
