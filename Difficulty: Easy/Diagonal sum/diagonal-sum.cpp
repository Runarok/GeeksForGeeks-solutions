//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find the sum of the two diagonals of a 4x4 matrix
    int diagonalSum(int matrix[4][4]) {
        // Variable to store the sum of the diagonals
        int diagonalSum = 0;

        // Iterate through each row of the matrix
        for(int row = 0; row < 4; row++) {
            // Add the element from the main diagonal (top-left to bottom-right)
            diagonalSum += matrix[row][row];

            // Add the element from the anti-diagonal (top-right to bottom-left)
            diagonalSum += matrix[row][4 - row - 1];
        }

        // Return the total sum of both diagonals
        return diagonalSum;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {

        int arr[4][4]; // Define a 2D array for matrix A
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                cin >> arr[i][j];
            }
        }

        Solution ob;

        int ans = ob.diagonalSum(arr);

        cout << ans << endl;
    }
    return 0;
}

// } Driver Code Ends