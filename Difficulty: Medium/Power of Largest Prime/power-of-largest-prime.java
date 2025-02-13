//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            long n = Long.parseLong(in.readLine());
            
            Solution ob = new Solution();
            if(ob.largePrime(n) == 1)
                System.out.println("YES");
            else
                System.out.println("NO");
        }
    }
}
// } Driver Code Ends

class Solution{
    static int largePrime(long n){
        // If the number is less than or equal to 3, it can't have a prime factor greater than 1
        if(n <= 3) return 0;

        // Variables to track the count of prime factors and the largest prime factor
        int count = 0;
        long max = 0;

        // Iterate through potential prime factors up to the square root of n
        for(int i = 2; i <= Math.sqrt(n); i++){
            int temp = 0;

            // Divide n by i while i is a factor of n
            while(n % i == 0){
                temp++;
                max = i;
                count = temp;
                n /= i;
            }
        }

        // If n is still greater than 1, it must be prime
        if(n > 1){
            if(n > max){
                max = n;
                count = 1;
            }
        }

        // If the largest prime factor appears more than once, return 1; otherwise, return 0
        return (count != 1) ? 1 : 0;
    }
}
