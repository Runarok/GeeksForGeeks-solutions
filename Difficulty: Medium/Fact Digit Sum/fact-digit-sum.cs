//{ Driver Code Starts
//Initial Template for C#


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
                int N = Convert.ToInt32(Console.ReadLine());
                Solution obj = new Solution();
                List<int> res = obj.FactDigit(N);
                foreach (int i in res)
                    Console.Write(i);
                Console.Write("\n");
            
Console.Write("~"+"\n");
}

        }
    }
}
// } Driver Code Ends

class Solution
{
    // Function to find factorial of a number
    public int Factorial(int n)
    {
        int result = 1;
        for (int i = 2; i <= n; i++)
        {
            result *= i;
        }
        return result;
    }

    // Function to find the minimum number X such that A(X) = N
    public List<int> FactDigit(int N)
    {
        // List of factorials from 0! to 9! (since we are only dealing with digits)
        int[] factorials = new int[] { 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 };
        
        // List to store digits of the minimum number X
        List<int> digits = new List<int>();

        // We iterate from the highest factorial (9!) down to 1!
        for (int i = 9; i >= 1; i--)
        {
            while (N >= factorials[i]) // Check if we can subtract factorial of i
            {
                digits.Add(i); // Add digit i to the list
                N -= factorials[i]; // Subtract the factorial value from N
            }
        }

        // Sort the digits to ensure the smallest possible number
        digits.Sort();

        return digits; // Return the list of digits
    }
}
