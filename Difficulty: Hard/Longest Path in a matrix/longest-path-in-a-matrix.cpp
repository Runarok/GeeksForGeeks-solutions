//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Directions for exploring up, right, down, left.
    int dx[4] = {-1, 0, 1, 0};  // Vertical moves
    int dy[4] = {0, 1, 0, -1};  // Horizontal moves

    /**
     * Helper function to compute the longest increasing path starting from (x, y).
     * @param x - The current row.
     * @param y - The current column.
     * @param matrix - The 2D matrix containing the values.
     * @param dp - Memoization table to store the results of subproblems.
     * @returns The length of the longest increasing path from (x, y).
     */
    int f(int x, int y, vector<vector<int>>& matrix, vector<vector<int>>& dp) {
        // If this position is already computed, return the cached result.
        if (dp[x][y] != -1) return dp[x][y];

        // Get matrix dimensions.
        int m = matrix.size();
        int n = matrix[0].size();

        // Initialize direction variables for up, down, left, and right.
        int up = 0, down = 0, left = 0, right = 0;

        // Explore up (if valid move).
        if (x > 0 && matrix[x - 1][y] > matrix[x][y]) 
            up = 1 + f(x - 1, y, matrix, dp); // Move up and recursively find the longest path.
        
        // Explore down (if valid move).
        if (x < m - 1 && matrix[x + 1][y] > matrix[x][y]) 
            down = 1 + f(x + 1, y, matrix, dp); // Move down and recursively find the longest path.
        
        // Explore left (if valid move).
        if (y > 0 && matrix[x][y - 1] > matrix[x][y]) 
            left = 1 + f(x, y - 1, matrix, dp); // Move left and recursively find the longest path.
        
        // Explore right (if valid move).
        if (y < n - 1 && matrix[x][y + 1] > matrix[x][y]) 
            right = 1 + f(x, y + 1, matrix, dp); // Move right and recursively find the longest path.

        // Store the result in the memoization table and return the maximum length found.
        return dp[x][y] = max({up, down, left, right, 1}); // Consider the current cell itself (hence the "1").
    }

    /**
     * Function to find the length of the longest increasing path in the matrix.
     * @param matrix - The 2D matrix containing the values.
     * @returns The length of the longest increasing path.
     */
    int longestIncreasingPath(vector<vector<int>>& matrix) {
        // Get matrix dimensions.
        int m = matrix.size();
        int n = matrix[0].size();

        // Initialize dp table with -1 to indicate uncomputed states.
        vector<vector<int>> dp(m, vector<int>(n, -1));
        int maxi = 0;

        // Iterate over all cells in the matrix to find the longest path.
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // Update maxi with the longest path starting from (i, j).
                maxi = max(maxi, f(i, j, matrix, dp));
            }
        }
        return maxi; // Return the maximum longest path found.
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    string tc;
    getline(cin, tc);
    t = stoi(tc);
    while (t--) {
        string input;
        getline(cin, input);
        vector<vector<int>> result;
        string innerArray;
        bool isInsideArray = false;

        for (char c : input) {
            if (c == '[') {
                if (isInsideArray) {
                    innerArray.clear();
                }
                isInsideArray = true;
            } else if (c == ']') {
                if (isInsideArray && !innerArray.empty()) {
                    vector<int> row;
                    stringstream ss(innerArray);
                    int num;

                    while (ss >> num) {
                        row.push_back(num);
                        if (ss.peek() == ',')
                            ss.ignore();
                        while (isspace(ss.peek()))
                            ss.ignore();
                    }

                    result.push_back(row);
                    innerArray.clear();
                }
                isInsideArray = false;
            } else if (isInsideArray) {
                if (!isspace(c)) {
                    // Append non-space characters to the inner array
                    innerArray += c;
                }
            }
        }

        Solution obj;
        int ans = obj.longestIncreasingPath(result);
        cout << ans << "\n";
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends