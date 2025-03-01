//{ Driver Code Starts
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DriverCode
{

    class GFG
    {
        static void Main(string[] args)
        {
            int testcases;// Taking testcase as input
            testcases = Convert.ToInt32(Console.ReadLine());
            while (testcases-- > 0)// Looping through all testcases
            {
                long N = Convert.ToInt64(Console.ReadLine());
                Solution obj = new Solution();
                long res = obj.ETF(N);
                Console.Write(res);
                Console.Write("\n");
          
Console.Write("~"+"\n");
}

        }
    }
    

}
// } Driver Code Ends

// User function Template for C#

class Solution
{
    // Function to find the Euler's Totient Function (ETF) of N.
    public long ETF(long N)
    {
        // List to store the distinct prime factors of N.
        List<long> primeFactors = new List<long>();

        long m = N; // Copy of N to factorize it.

        // Factorize N by checking for divisibility starting from 2
        while (m > 1)
        {
            for (long i = 2; i <= m; i++)
            {
                if (m % i == 0) // If i is a factor of m
                {
                    m /= i; // Divide m by i
                    primeFactors.Add(i); // Add the factor to the list
                    break; // Move to next factor
                }
            }
        }

        // Remove duplicate prime factors
        primeFactors = primeFactors.Distinct().ToList();

        // If there are no prime factors or the number is prime
        if (primeFactors.Count == 0 || primeFactors[0] == N)
            return N - 1; // Return N-1 for prime numbers

        // Count the numbers from 1 to N-1 that are coprime with N
        long count = 1; // Count starts from 1 as N is always coprime with itself

        // Check for each number from 2 to N-1 if it is coprime with N
        for (long j = 2; j < N; j++)
        {
            if (IsCoprime(j, primeFactors)) // Check if j is coprime with N
                count++; // Increment count if j is coprime
        }

        return count; // Return the final count of coprime numbers
    }

    // Function to check if a number is coprime with N (not divisible by any of the prime factors)
    public bool IsCoprime(long num, List<long> primeFactors)
    {
        // Check if num is divisible by any of the prime factors of N
        foreach (long factor in primeFactors)
        {
            if (num % factor == 0) // If divisible, num is not coprime
                return false;
        }
        return true; // If no factors divide num, it is coprime
    }
}
