//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find transpose of a matrix.
    void transpose(int mat[4][4]) {
        // Iterate over the matrix to swap elements across the diagonal
        for(int i = 0; i < 4; i++) {
            for(int j = i + 1; j < 4; j++) {
                // Swap mat[i][j] with mat[j][i] to get the transpose
                swap(mat[i][j], mat[j][i]);
            }
        }
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;

    while (t--) {
        int N = 4;

        int mat[4][4];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                cin >> mat[i][j];
            }
        }

        Solution ob;
        ob.transpose(mat);
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < N; ++j)
                cout << mat[i][j] << " ";
            cout << endl;
        }
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends