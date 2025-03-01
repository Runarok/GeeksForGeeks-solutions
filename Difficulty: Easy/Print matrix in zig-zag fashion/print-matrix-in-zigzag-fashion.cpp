//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++
// Back-end complete function Template for C++

class Solution {
public:
    // Function to return the elements of the matrix in zig-zag order.
    vector<int> zigZagMatrix(vector<vector<int>> &mat) {
        // Get the number of rows and columns in the matrix
        int totalRows = mat.size();
        int totalCols = mat[0].size();
        
        // Initialize current position
        int currentRow = 0, currentCol = 0;
        
        // Flag to indicate traversal direction (true for upward, false for downward)
        bool goingUp = true;
        
        // Vector to store the result
        vector<int> result;
        
        // Traverse until all elements are covered
        while (currentRow < totalRows && currentCol < totalCols) {
            if (goingUp) {
                // Moving diagonally up-right
                while (currentCol < totalCols - 1 && currentRow > 0) {
                    result.push_back(mat[currentRow][currentCol]);
                    currentRow--;
                    currentCol++;
                }
                // Add the last element in the upward diagonal
                result.push_back(mat[currentRow][currentCol]);
                
                // Determine the next starting position
                if (currentCol == totalCols - 1) {
                    currentRow++;  // Reached the last column, move down
                } else {
                    currentCol++;  // Otherwise, move right
                }
            } else {
                // Moving diagonally down-left
                while (currentCol > 0 && currentRow < totalRows - 1) {
                    result.push_back(mat[currentRow][currentCol]);
                    currentRow++;
                    currentCol--;
                }
                // Add the last element in the downward diagonal
                result.push_back(mat[currentRow][currentCol]);
                
                // Determine the next starting position
                if (currentRow == totalRows - 1) {
                    currentCol++;  // Reached the last row, move right
                } else {
                    currentRow++;  // Otherwise, move down
                }
            }
            // Flip the direction for the next diagonal
            goingUp = !goingUp;
        }
        
        // Return the result vector
        return result;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> arr(n, vector<int>(m));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                cin >> arr[i][j];
            }
        }
        cin.ignore();
        Solution ob;
        vector<int> res = ob.zigZagMatrix(arr);
        for (int i = 0; i < res.size(); i++) {
            cout << res[i] << " ";
        }
        cout << "\n";
    }
    return 0;
}
// } Driver Code Ends