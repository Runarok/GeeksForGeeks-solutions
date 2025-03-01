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
            String s = br.readLine().trim();
            int N = Integer.parseInt(s);
            Solution ob = new Solution();
            long ans = ob.LargestProductPalin(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends


class Solution {
    public long LargestProductPalin(int N) {
        // Calculate the smallest and largest N-digit numbers
        int minN = (int) Math.pow(10, N - 1);  // smallest N-digit number
        int maxN = (int) Math.pow(10, N) - 1;  // largest N-digit number
        
        long maxProduct = -1;
        
        // Iterate over all pairs of N-digit numbers in a way that minimizes redundant checks
        for (int i = maxN; i >= minN; i--) {
            for (int j = i; j >= minN; j--) {
                long product = (long) i * j;
                if (product < maxProduct) break; // No need to check smaller products
                if (isPalindrome(product)) {
                    maxProduct = product;  // Update maxProduct if we find a palindrome product
                }
            }
        }
        
        return maxProduct;  // Return the largest palindrome product
    }

    // Optimized palindrome check using arithmetic operations
    private boolean isPalindrome(long number) {
        long original = number;
        long reversed = 0;
        
        // Reverse the digits of the number and check if it matches the original
        while (number > 0) {
            reversed = reversed * 10 + number % 10;
            number /= 10;
        }
        
        return original == reversed;  // If the original and reversed numbers match, it's a palindrome
    }
}
