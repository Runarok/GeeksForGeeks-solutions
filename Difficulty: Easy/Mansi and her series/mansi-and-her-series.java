//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.nthTerm(n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to check if a number is prime
    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false; // Numbers less than or equal to 1 are not prime
        } else if (n == 2) {
            return true; // 2 is a prime number
        } else if (n % 2 == 0) {
            return false; // Even numbers greater than 2 are not prime
        } else {
            // Check for divisibility from 3 up to the square root of n
            for (int i = 3; i <= (int) Math.sqrt(n); i += 2) {
                if (n % i == 0) {
                    return false; // n is divisible by i, so it's not prime
                }
            }
        }
        return true; // If no divisors are found, the number is prime
    }

    // Function to return the nth term of a sequence based on primes
    static int nthTerm(int n) {
        ArrayList<Integer> primes = new ArrayList<>(); // List to store prime numbers
        
        // Iterate over numbers starting from 2 to find primes
        for (int i = 2; primes.size() < n; i++) {
            if (isPrime(i)) {
                primes.add(i); // Add the prime number to the list
            }
        }
        
        // Return the nth term using the formula (prime * n) + n
        return (primes.get(n - 1) * n) + n;
    }
}
