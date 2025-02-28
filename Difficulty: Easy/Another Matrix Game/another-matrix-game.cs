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
                
                string S = Console.ReadLine().Trim();
                Solution obj = new Solution();
                string res = obj.matrixGame(S);
                
                Console.Write(res+"\n");
          
Console.Write("~"+"\n");
}

        }
    }
}

// } Driver Code Ends

class Solution
{
    public string matrixGame(string S)
    {
        // Step 1: Determine the size of the square matrix.
        // Since S has a perfect square length, its square root will be the side length.
        int size = (int)Math.Sqrt(S.Length);

        // Step 2: Initialize the square matrix (size x size) to store characters.
        char[,] matrix = new char[size, size];

        // Step 3: Fill the matrix with characters from the input string `S`.
        // Fill row-wise: 
        // Example: "abcdefghi" with size=3 becomes:
        // a b c
        // d e f
        // g h i
        for (int row = 0; row < size; row++)
        {
            for (int col = 0; col < size; col++)
            {
                matrix[row, col] = S[row * size + col];
            }
        }

        // Step 4: Process each column to find characters that appear more than once in that column.
        // Those repeated characters will be "removed" (replaced with '-').
        for (int col = 0; col < size; col++)
        {
            int[] freq = new int[26]; // Frequency array for lowercase letters 'a' to 'z'

            // Count frequency of each character in the current column
            for (int row = 0; row < size; row++)
            {
                freq[matrix[row, col] - 'a']++;
            }

            // Replace all repeated characters (frequency > 1) with '-'
            for (int row = 0; row < size; row++)
            {
                if (freq[matrix[row, col] - 'a'] > 1)
                {
                    matrix[row, col] = '-';
                }
            }
        }

        // Step 5: Build the result string by reading the matrix column-wise.
        // For each column, alternate between reading from top and bottom.
        // This creates a "zig-zag" pattern down each column.

        StringBuilder result = new StringBuilder();

        for (int col = 0; col < size; col++)
        {
            int startRow = 0;
            int endRow = size - 1;

            while (startRow <= endRow)
            {
                // Read from the top of the column if it's not marked '-'
                while (startRow < size && matrix[startRow, col] == '-')
                {
                    startRow++;
                }

                if (startRow <= endRow && startRow < size)
                {
                    result.Append(matrix[startRow, col]);
                }

                // Read from the bottom of the column if it's not marked '-'
                while (endRow >= 0 && matrix[endRow, col] == '-')
                {
                    endRow--;
                }

                if (endRow > startRow && endRow >= 0)
                {
                    result.Append(matrix[endRow, col]);
                }

                // Move pointers closer to the middle
                startRow++;
                endRow--;
            }
        }

        // Step 6: If the result string is empty (all characters were removed), return "0"
        // Otherwise, return the final processed string.
        return result.Length > 0 ? result.ToString() : "0";
    }
}
