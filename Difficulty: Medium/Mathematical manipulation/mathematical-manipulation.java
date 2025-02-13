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
            int ans = ob.CommonFactor(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    public int CommonFactor(int n) {
        boolean[] hasCommonFactor = new boolean[n + 1];

        // Find all prime factors of n
        Set<Integer> primeFactors = new HashSet<>();
        int temp = n;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            while (temp % i == 0) {
                primeFactors.add(i);
                temp /= i;
            }
        }
        if (temp > 1) {
            primeFactors.add(temp);
        }

        // Mark multiples of each prime factor
        for (int factor : primeFactors) {
            markMultiples(factor, hasCommonFactor, n);
        }

        // Count numbers with at least one common factor with n
        int count = 0;
        for (int i = 2; i <= n; i++) {
            if (hasCommonFactor[i]) {
                count++;
            }
        }

        return count;
    }

    private void markMultiples(int factor, boolean[] hasCommonFactor, int n) {
        for (int i = factor; i <= n; i += factor) {
            hasCommonFactor[i] = true;
        }
    }
}
