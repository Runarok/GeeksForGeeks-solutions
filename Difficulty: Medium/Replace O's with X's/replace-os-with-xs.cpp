//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    vector<vector<char>> fill(vector<vector<char>>& mat) {
        int rows = mat.size();
        int cols = mat[0].size();

        // Step 1: Start DFS from the borders (first and last row/column)
        // Traverse the first and last rows
        for (int j = 0; j < cols; j++) {
            if (mat[0][j] == 'O') {
                dfs(mat, 0, j);
            }
            if (mat[rows - 1][j] == 'O') {
                dfs(mat, rows - 1, j);
            }
        }

        // Traverse the first and last columns
        for (int i = 0; i < rows; i++) {
            if (mat[i][0] == 'O') {
                dfs(mat, i, 0);
            }
            if (mat[i][cols - 1] == 'O') {
                dfs(mat, i, cols - 1);
            }
        }

        // Step 2: Replace all surrounded 'O's with 'X' and restore safe 'O's back
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (mat[i][j] == 'O') {
                    mat[i][j] = 'X';  // Surrounded 'O', replace it with 'X'
                } else if (mat[i][j] == '*') {
                    mat[i][j] = 'O';  // Restore safe 'O'
                }
            }
        }

        return mat;
    }

private:
    // DFS function as a helper outside of the fill function
    void dfs(vector<vector<char>>& mat, int i, int j) {
        int rows = mat.size();
        int cols = mat[0].size();
        
        // Base case: if out of bounds or not 'O', return
        if (i < 0 || i >= rows || j < 0 || j >= cols || mat[i][j] != 'O') {
            return;
        }
        
        // Mark the 'O' as safe by changing it to a temporary marker (e.g., '*')
        mat[i][j] = '*';
        
        // Explore neighbors in all four directions
        dfs(mat, i + 1, j); // down
        dfs(mat, i - 1, j); // up
        dfs(mat, i, j + 1); // right
        dfs(mat, i, j - 1); // left
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n >> m;
        vector<vector<char>> mat(n, vector<char>(m, '.'));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                cin >> mat[i][j];

        Solution ob;
        vector<vector<char>> ans = ob.fill(mat);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                cout << ans[i][j] << " ";
            }
            cout << "\n";
        }

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends