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
                var ip = Console.ReadLine().Trim().Split(' ');
                int M = int.Parse(ip[0]);
                int N = int.Parse(ip[1]);
                List<List<int>> matrix = new List<List<int>>();
                for (int i = 0; i < M; i++)
                {
                    matrix.Add(new List<int>());
                }
                for (int i = 0; i < M; i++)
                {
                    ip = Console.ReadLine().Trim().Split(' ');
                    for (int j = 0; j < N; j++)
                    {
                        matrix[i].Add(int.Parse(ip[j]));
                    }
                }
                Solution obj = new Solution();
                var res = obj.rotateMatrix(M, N, matrix);
                foreach (var rows in res)
                {
                    foreach (var ele in rows)
                    {
                        Console.Write(ele + " ");
                    }
                    Console.WriteLine("");
                }

            }
        }
    }
}
// } Driver Code Ends

class Solution
{
    // Function to rotate the matrix in a clockwise direction layer by layer
    public List<List<int>> rotateMatrix(int M, int N, List<List<int>> Mat)
    {
        int left = 0, top = 0;   // Variables to track the current layer's top-left corner
        int prev, curr;           // To store the previous and current element during rotation

        // Loop to process each layer until we have processed all layers
        while (top < M && left < N)
        {
            // If we have reached the last row or last column, stop the rotation
            if (top + 1 == M || left + 1 == N) break;

            // Store the element that is just below the top-left corner of the layer
            prev = Mat[top + 1][left];

            // Rotate the top row (left to right)
            for (int i = left; i < N; i++)
            {
                curr = Mat[top][i];  // Store the current element of the top row
                Mat[top][i] = prev;  // Place the previous element here
                prev = curr;         // Update the previous element to the current one
            }
            top++;  // Move down to the next row after processing the top row

            // Rotate the rightmost column (top to bottom)
            for (int i = top; i < M; i++)
            {
                curr = Mat[i][N - 1];  // Store the current element of the rightmost column
                Mat[i][N - 1] = prev;  // Place the previous element here
                prev = curr;            // Update the previous element to the current one
            }
            N--;  // Move left to shrink the column boundary after processing the rightmost column

            // Rotate the bottom row (right to left)
            if (left < N)
            {
                for (int i = N - 1; i >= left; i--)
                {
                    curr = Mat[M - 1][i];  // Store the current element of the bottom row
                    Mat[M - 1][i] = prev;  // Place the previous element here
                    prev = curr;            // Update the previous element to the current one
                }
            }
            M--;  // Move up to shrink the row boundary after processing the bottom row

            // Rotate the leftmost column (bottom to top)
            if (top < M)
            {
                for (int i = M - 1; i >= top; i--)
                {
                    curr = Mat[i][left];   // Store the current element of the leftmost column
                    Mat[i][left] = prev;   // Place the previous element here
                    prev = curr;           // Update the previous element to the current one
                }
            }
            left++;  // Move right to shrink the column boundary after processing the leftmost column
        }

        // Return the rotated matrix after all layers have been processed
        return Mat;
    }
}
