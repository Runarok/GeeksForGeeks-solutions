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
            int[] ans = ob.sixyPrime(L,R);
            for(int i = 0; i < ans.length; i++)
            {
                System.out.print(ans[i] + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends


class Solution {
    public int[] sixyPrime(int L, int R) {
        // Create a boolean array to mark primes
        boolean arr[] = new boolean[R + 1];
        Arrays.fill(arr, true); // Initialize all values as true (assume primes)
        
        // Implement Sieve of Eratosthenes to find primes up to R
        for (int i = 2; i * i <= R; i++) {
            if (arr[i] == true) {
                // Mark multiples of i as non-prime
                for (int j = i * i; j <= R; j += i) {
                    arr[j] = false;
                }
            }
        }
        
        // List to store the found "sexy primes" (pairs of primes with a difference of 6)
        ArrayList<Integer> al1 = new ArrayList<>();
        
        // Check for prime pairs (i, i+6) in the range [L, R]
        for (int i = L + 6; i <= R; i++) {
            if (arr[i] && arr[i - 6]) {
                // Add both primes in the pair
                al1.add(i - 6);
                al1.add(i);
            }
        }
        
        // If no sexy prime pairs found, return [-1]
        if (al1.isEmpty()) {
            return new int[]{-1};
        }
        
        // Convert the ArrayList to an array
        int r[] = new int[al1.size()];
        for (int i = 0; i < al1.size(); i++) {
            r[i] = al1.get(i);
        }
        
        return r; // Return the result array containing sexy primes
    }
}
