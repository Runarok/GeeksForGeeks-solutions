//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to search for a given integer in a matrix.
    bool searchMatrix(vector<vector<int>> &matrix, int target) {
        // Initialize a boolean variable to track if the target is found
        bool isFound = false;

        // Iterate through each row of the matrix
        for (int row = 0; row < matrix.size(); row++) {
            // Iterate through each column of the current row
            for (int col = 0; col < matrix[row].size(); col++) {
                // Check if the current element matches the target
                if (matrix[row][col] == target) {
                    isFound = true;
                    break; // Exit the inner loop once found
                }
            }
        }

        // Return true if the target was found, otherwise false
        return isFound;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {

        int n, m;
        cin >> n >> m;
        vector<vector<int> > matrix(n);

        for (int i = 0; i < n; i++) {
            matrix[i].assign(m, 0);
            for (int j = 0; j < m; j++) {
                cin >> matrix[i][j];
            }
        }

        int x;
        cin >> x;
        Solution obj;
        if (obj.searchMatrix(matrix, x))
            cout << "true\n";
        else
            cout << "false\n";

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends