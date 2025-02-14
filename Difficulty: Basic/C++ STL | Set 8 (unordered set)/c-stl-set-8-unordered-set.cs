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

                int Queries = Convert.ToInt32(Console.ReadLine());
                string s = Console.ReadLine().Trim();
                string[] ss = s.Split(' ');
                Solution obj = new Solution();
                HashSet<int> set =new HashSet<int>();

                int k = 0;
                for (int i = 0; i < Queries; i++)
                {
                    if (ss[k] == "a")
                    {
                        obj.insert(set, Convert.ToInt32(ss[k + 1]));
                        k += 2;
                    }
                    else if (ss[k] == "b")
                    {
                        obj.erase(set, Convert.ToInt32(ss[k + 1]));
                        k += 2;
                    }
                    else if (ss[k] == "d")
                    {
                        Console.Write(obj.size(set) + " ");
                        k += 1;
                    }
                    else
                    {
                        Console.Write(obj.find(set, Convert.ToInt32(ss[k + 1])) + " ");
                        k += 2;
                    }
                }
                Console.Write("\n");
            
Console.Write("~"+"\n");
}
        }
    }
}
// } Driver Code Ends

class Solution
{
    // Function to insert an element x to the unordered set s.
    public void insert(HashSet<int> s, int x)
    {
        s.Add(x); // Adds element to the set
    }

    // Function to erase an element x from the unordered set s.
    public void erase(HashSet<int> s, int x)
    {
        s.Remove(x); // Removes element from the set
    }

    // Function to return the size of the unordered set s.
    public int size(HashSet<int> s)
    {
        return s.Count; // Returns the size of the set
    }

    // Function to return 1 if the element x is present in the unordered set s else returns -1.
    public int find(HashSet<int> s, int x)
    {
        if (s.Contains(x)) // Check if element is present in the set
        {
            return 1; // Element found
        }
        else
        {
            return -1; // Element not found
        }
    }
}
