//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.isTwistedPrime(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
        
    // Function to check if a number is prime
    public boolean check(int num){
        // Check divisibility up to the square root of num
        for(int i = 2; i * i <= num; i++) {
            if(num % i == 0) {
                return false;  // num is divisible by i, hence it's not prime
            }
        }
        return true;  // num is prime if no divisors are found
    }
        
    // Function to reverse the digits of a number
    public int sum(int num){
        int sum = 0;
        // Reverse the digits of num
        while(num > 0){
            int y = num % 10;  // Extract the last digit
            sum = sum * 10 + y;  // Append it to the sum
            num /= 10;  // Remove the last digit
        }
        return sum;  // Return the reversed number
    }
        
    // Function to check if the number is a twisted prime
    int isTwistedPrime(int N) {
        // If N is not prime, return 0
        if(!check(N)) return 0;
        
        // Reverse the digits of N and check if the reversed number is prime
        int rev = sum(N);
        if(!check(rev)) return 0;
        
        // If both N and its reverse are prime, return 1
        return 1;
    }
}
