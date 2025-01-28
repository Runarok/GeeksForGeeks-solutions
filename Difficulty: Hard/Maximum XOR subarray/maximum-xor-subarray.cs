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
                int[] arr = new int[N];

                string elements = Console.ReadLine().Trim();
                elements = elements + " ";
                int k = 0;
                string element = "";
                for (int j = 0; j < elements.Length; j++)
                {

                    if (elements[j] == ' ')
                    {
                        arr[k] = int.Parse(element);
                        element = "";
                        k++;
                    }
                    else
                    {
                        element = element + elements[j];
                    }
                }
                Solution obj = new Solution();
                int res = obj.maxSubarrayXOR( N, arr);
                Console.Write(res+"\n");
          
Console.Write("~"+"\n");
}

        }
    }
}



// } Driver Code Ends


//User function Template for C#

class Solution {

    // Make TrieNode public so it can be accessed by public methods
    public class TrieNode {
        public TrieNode[] child = new TrieNode[2];
    }

    // Function to insert a number into the Trie
    public void insert(TrieNode root, int num) {
        TrieNode node = root;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            if (node.child[bit] == null) {
                node.child[bit] = new TrieNode();
            }
            node = node.child[bit];
        }
    }

    // Function to find the maximum XOR of a number with elements in the Trie
    public int findMaxXOR(TrieNode root, int num) {
        TrieNode node = root;
        int maxXor = 0;
        
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            int oppositeBit = bit ^ 1;
            
            if (node.child[oppositeBit] != null) {
                maxXor |= (1 << i);
                node = node.child[oppositeBit];
            } else {
                node = node.child[bit];
            }
        }
        
        return maxXor;
    }

    // Function to calculate the maximum subarray XOR
    public int maxSubarrayXOR(int N, int[] arr) {
        // Initialize root of Trie
        TrieNode root = new TrieNode();
        
        // Variable to keep track of the maximum XOR
        int maxXor = int.MinValue;
        
        // To keep track of the prefix XOR
        int prefixXor = 0;
        
        // Insert 0 initially to handle case when prefixXor itself is the maximum
        insert(root, 0);
        
        // Traverse through the array
        for (int i = 0; i < N; i++) {
            // Update the current prefix XOR
            prefixXor ^= arr[i];
            
            // Find the maximum XOR with the current prefix XOR
            maxXor = Math.Max(maxXor, findMaxXOR(root, prefixXor));
            
            // Insert the current prefix XOR into the Trie
            insert(root, prefixXor);
        }
        
        return maxXor;
    }
}
