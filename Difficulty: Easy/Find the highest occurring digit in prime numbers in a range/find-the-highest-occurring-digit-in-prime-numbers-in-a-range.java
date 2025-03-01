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
            System.out.println(ob.maxDigit(L,R));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    public int maxDigit(int L, int R)
    {
        // Generate prime numbers between L and R
        List<Integer> primes = generatePrimes(L, R);  
        
        // If no primes found in the range, return -1
        if (primes.isEmpty()) {  
            return -1;  // No prime numbers in the range  
        }  
        
        int[] digitCount = new int[10];  // Array to count occurrences of each digit from 0 to 9
        
        // Count the digits in each prime number
        for (int prime : primes) {  
            while (prime > 0) {  
                int digit = prime % 10;  // Get the last digit of the prime
                digitCount[digit]++;  // Increment the count for this digit
                prime /= 10;  // Remove the last digit
            }  
        }  
        
        // Find the digit with the highest count
        int maxCount = -1;  
        int resultDigit = -1;  
        
        for (int digit = 0; digit < 10; digit++) {  
            // Update the result if a higher count is found
            if (digitCount[digit] > maxCount) {  
                maxCount = digitCount[digit];  
                resultDigit = digit;  
            } 
            // If there is a tie, choose the larger digit
            else if (digitCount[digit] == maxCount) {  
                resultDigit = Math.max(resultDigit, digit);  
            }  
        }  
        
        return resultDigit;  // Return the digit with the highest frequency
    }  
    
    // Function to generate prime numbers between L and R
    private static List<Integer> generatePrimes(int L, int R) {  
        List<Integer> primes = new ArrayList<>();  
        // Check each number from L to R
        for (int num = Math.max(2, L); num <= R; num++) {  
            if (isPrime(num)) {  // If the number is prime, add it to the list
                primes.add(num);  
            }  
        }  
        return primes;  
    }  
    
    // Function to check if a number is prime
    private static boolean isPrime(int num) {  
        if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime
        // Check divisibility up to the square root of the number
        for (int i = 2; i <= Math.sqrt(num); i++) {  
            if (num % i == 0) return false;  // If divisible by any number, it's not prime
        }  
        return true;  // Return true if the number is prime
    }
}
