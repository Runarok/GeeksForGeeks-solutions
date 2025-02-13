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
            String[] s = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]);
            int r = Integer.parseInt(s[1]);
            int m = Integer.parseInt(s[2]);
            Solution obj = new Solution();
            int ans = obj.nCrModM(n, r, m);
            System.out.println(ans);

        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution
{
    // Function to calculate nCr % m using Lucas' Theorem and Chinese Remainder Theorem
    public int nCrModM(int n, int r, int m)
    {
        List<Integer> primes;
        primes = findPrimeFactors(m); // Find prime factors of m
        
        List<Integer> rem = new ArrayList<Integer>();
        for (int p : primes) {
            // Calculate nCr % p using Lucas' Theorem for each prime factor
            rem.add(rCnModPrimeLucas(n, r, p));
        }
        
        // Use Chinese Remainder Theorem to find the solution
        return findByCrt(primes, rem);
    }
    
    // Function to find the prime factors of a number
    static List<Integer> findPrimeFactors(int n)
    {
        Set<Integer> factors = new HashSet<>();
        List<Integer> ans = new ArrayList<Integer>();
        int c = 2;
        
        // Find all factors of n
        while (n > 1) {
            if (n % c == 0) {
                factors.add(c); // Add prime factor
                n /= c;
            } else {
                c++;
            }
        }
        
        // Add all prime factors to the result list
        for (int i : factors) {
            ans.add(i);
        }
        return ans;
    }
    
    // Function to solve the system of congruences using Chinese Remainder Theorem
    static int findByCrt(List<Integer> x, List<Integer> r)
    {
        int N = x.size();
        int min_x = 0;
        
        while (true) {
            boolean found = true;
            
            // Check if the current solution satisfies all the congruences
            for (int i = 0; i < N; i++) {
                if (min_x % x.get(i) != r.get(i)) {
                    found = false;
                    break;
                }
            }
            
            // If a solution is found, return it
            if (found) {
                return min_x;
            }
            min_x++;
        }
    }
    
    // Function to calculate nCr % p for a prime p
    static int rCnModP(int n, int r, int p)
    {
        if (r == 0 || r == n) {
            return 1;
        }
        
        int nCr[] = new int[r + 1];
        nCr[0] = 1;
        
        // Calculate nCr modulo p using dynamic programming
        for (int i = 1; i <= n; i++) {
            for (int j = Math.min(i, r); j > 0; j--) {
                nCr[j] = (nCr[j] + nCr[j - 1]) % p;
            }
        }
        return nCr[r];
    }
    
    // Function to calculate nCr % p using Lucas' Theorem for a prime p
    static int rCnModPrimeLucas(int n, int r, int p)
    {
        if (r == 0) {
            return 1;
        }
        return (rCnModPrimeLucas(n / p, r / p, p) * rCnModP(n % p, r % p, p)) % p;
    }
}
