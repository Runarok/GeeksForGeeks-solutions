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

                var ip = Console.ReadLine().Trim().Split(' ');
                List<int> A = new List<int>();
                for(int i = 0;i<N;i++){
                    A.Add(int.Parse(ip[i]));
                }
                Solution obj = new Solution();
                int res = obj.minimumInteger(N, A);
                
                Console.Write(res+"\n");
          
Console.Write("~"+"\n");
}

        }
    }
}

// } Driver Code Ends

// User function Template for C#

class Solution
{
    // Function to find the minimum integer that satisfies the condition
    public int minimumInteger(int N, List<int> A)
    {
        // Calculate the sum of all elements in the list
        long sum = 0;
        foreach (int i in A) sum += i;

        // Initialize the minimum value as the largest possible integer value
        long x = int.MaxValue;

        // Iterate through each element in the list
        foreach (int j in A)
        {
            // Check if the sum is less than or equal to N * j
            if (sum <= (long) N * j)
            {
                // Update the minimum value if the current element satisfies the condition
                x = Math.Min(x, j);
            }
        }

        // Return the minimum integer as an integer
        return (int)x;
    }
}
