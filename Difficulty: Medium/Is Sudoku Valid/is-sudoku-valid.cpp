//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
public:
    // Helper function to check a 3x3 subgrid for duplicates
    bool func(int sr, int er, int sc, int ec, vector<vector<int>>& mat) {
        set<int> st; // Set to track numbers in the subgrid
        for (int i = sr; i <= er; i++) {
            for (int j = sc; j <= ec; j++) {
                if (mat[i][j] == 0) continue; // Skip empty cells
                if (st.find(mat[i][j]) != st.end()) return false; // Found duplicate
                st.insert(mat[i][j]);
            }
        }
        return true;
    }

    // Main function to validate the Sudoku board
    bool isValid(vector<vector<int>>& mat) {
        // Row-wise check
        for (int i = 0; i < 9; i++) {
            set<int> st; // Set to track numbers in the row
            for (int j = 0; j < 9; j++) {
                if (mat[i][j] == 0) continue; // Skip empty cells
                if (st.find(mat[i][j]) != st.end()) return false; // Found duplicate
                st.insert(mat[i][j]);
            }
        }

        // Column-wise check
        for (int i = 0; i < 9; i++) {
            set<int> st; // Set to track numbers in the column
            for (int j = 0; j < 9; j++) {
                if (mat[j][i] == 0) continue; // Skip empty cells
                if (st.find(mat[j][i]) != st.end()) return false; // Found duplicate
                st.insert(mat[j][i]);
            }
        }

        // 3x3 subgrid-wise check
        for (int sr = 0; sr < 9; sr += 3) { // Iterate over subgrids in steps of 3
            int er = sr + 2;
            for (int sc = 0; sc < 9; sc += 3) {
                int ec = sc + 2;
                // Check each 3x3 subgrid using the helper function
                if (!func(sr, er, sc, ec, mat)) return false;
            }
        }

        // If no conflicts found, the board is valid
        return true;
    }
};




//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        vector<vector<int>> mat(9, vector<int>(9, 0));
        for (int i = 0; i < 81; i++)
            cin >> mat[i / 9][i % 9];

        Solution obj;
        bool res = obj.isValid(mat);
        if (res)
            cout << "true" << endl;
        else
            cout << "false" << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends