//{ Driver Code Starts
// Initial Template for C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace DriverCode {

class GFG {
    static void Main(string[] args) {
        int testcases; // Taking testcase as input
        testcases = Convert.ToInt32(Console.ReadLine());
        while (testcases-- > 0) // Looping through all testcases
        {
            var ip = Console.ReadLine().Trim().Split(' ');
            int a = int.Parse(ip[0]);
            int b = int.Parse(ip[1]);
            Solution obj = new Solution();
            obj.rightShift(a, b);

            Console.Write("~" + "\n");
        }
    }
}

}
// } Driver Code Ends

// User function Template for C#
class Solution {
    // Complete this function
    public void rightShift(int a, int b) {
        // Perform right shift operation
        int ans = a >> b;

        // print the result
        Console.WriteLine(ans);
    }
}
