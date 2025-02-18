//{ Driver Code Starts
// Initial Template for C#


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
                int[] arr = new int[2];
                string elements = Console.ReadLine().Trim();
                elements = elements + " " + "0";
                arr = Array.ConvertAll(elements.Split(), int.Parse);
                int N = arr[0];
                int R = arr[1];
                Solution obj = new Solution();
                long res = obj.nPr(N, R);
                Console.Write(res+"\n");
          
Console.Write("~"+"\n");
}

        }
    }
    
}


// } Driver Code Ends

class Solution
{
    // Complete this function
    public long nPr(int n, int r)
    {
        // Calculate nPr as n! / (n-r)!
        return fC(n) / fC(n - r);
    }
    
    // Function to calculate factorial of n
    public long fC(int n){
        long f = 1;
        for(int i = 2; i <= n; i++)
            f *= i;
        return f;
    }
}
