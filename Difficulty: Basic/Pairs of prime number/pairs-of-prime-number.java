//{ Driver Code Starts


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
            int[] ans = ob.prime_pairs(n);
            for(int i = 0; i < ans.length; i++)
                System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Solution {
    
    // Function to find all prime pairs where the product of two primes is less than or equal to n
    public int[] prime_pairs(int n) {
        // Create an array to store prime number information (true means prime)
        boolean[] isPrime = new boolean[n + 1];
        
        // Initialize all numbers as prime (true)
        Arrays.fill(isPrime, true);
        // 0 and 1 are not prime numbers
        isPrime[0] = isPrime[1] = false;
        
        // Use the Sieve of Eratosthenes to mark non-prime numbers
        for (int i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                // Mark multiples of i as non-prime
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        // ArrayList to store prime numbers less than or equal to n
        ArrayList<Integer> list = new ArrayList<>();
        
        // Add primes to the list
        for (int i = 0; i <= n; i++) {
            if (isPrime[i]) {
                list.add(i);
            }
        }
        
        // ArrayList to store the prime pairs
        ArrayList<Integer> list2 = new ArrayList<>();
        
        // Find all prime pairs where the product of two primes is <= n
        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < list.size(); j++) {
                if (list.get(i) * list.get(j) <= n) {
                    list2.add(list.get(i));  // Add the first prime of the pair
                    list2.add(list.get(j));  // Add the second prime of the pair
                }
            }
        }
        
        // Convert the ArrayList to an array
        int[] arr = new int[list2.size()];
        for (int i = 0; i < list2.size(); i++) {
            arr[i] = list2.get(i);
        }
        
        // Return the array of prime pairs
        return arr;
    }
}
