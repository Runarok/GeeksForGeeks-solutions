//{ Driver Code Starts

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            int a = Integer.parseInt(S[0]);
            int b = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.getPPS(a,b));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to check if a number is a palindrome
    public static boolean isPalin(int num) {
        String numStr = String.valueOf(num);
        StringBuilder reversedStr = new StringBuilder(numStr).reverse();
        return reversedStr.toString().equals(numStr);
    }

    // Function to check if a number is prime
    public static boolean isPrime(int num) {
        if (num == 0 || num == 1) {
            return false; // 0 and 1 are not prime numbers
        }
        for (int divisor = 2; divisor * divisor <= num; divisor++) {
            if (num % divisor == 0) {
                return false; // If divisible, it's not prime
            }
        }
        return true;
    }

    // Function to calculate the sum of palindromic prime numbers within a range
    static Long getPPS(int start, int end) {
        long sumOfPalindromicPrimes = 0;
        for (int num = start; num <= end; num++) {
            if (isPalin(num) && isPrime(num)) {
                sumOfPalindromicPrimes += num;
            }
        }
        return sumOfPalindromicPrimes;
    }
}
