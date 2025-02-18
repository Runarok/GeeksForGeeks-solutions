//{ Driver Code Starts
//Initial Template for Javaimport java.io.*;

import java.util.Scanner;

interface in1
{
    void display(int p);
}

class GFG
{
    public static void main (String[] args)
    {
        Scanner sc=new Scanner (System.in);
        int t=sc.nextInt();
        while(t-->0)
        {
        int k= sc.nextInt();
        testClass p = new testClass();
        p.display(k);
        
System.out.println("~");
}
    }
}


// } Driver Code Ends

// User function Template for Java

class testClass implements in1
{
    // Function to display count of prime numbers less than or equal to k
    public void display(int k)
    {   
        // Initialize count to track number of primes
        int count = 0;
        
        // Iterate through numbers from 2 to k
        for (int i = 2; i <= k; i++){
            
            // Check if the current number is prime
            if (isPrime(i)){
                count++; // Increment the prime count
            }
        }
        
        // Print the final count of prime numbers
        System.out.println(count);
    }
    
    // Helper function to check if a number is prime
    boolean isPrime(int i){
        // Iterate from 2 to sqrt(i)
        for(int j = 2; j * j <= i; j++)
        
            // If divisible, return false (not a prime)
            if (i % j == 0){
                return false;
            }
        
        // If no divisors found, return true (prime)
        return true;
    }
}


//{ Driver Code Starts.

// } Driver Code Ends