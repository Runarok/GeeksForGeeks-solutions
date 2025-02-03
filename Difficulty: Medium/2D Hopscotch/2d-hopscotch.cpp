//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {

private:

    // Helper function to compute sum of neighboring cells based on movement arrays
    int calculateSum(int rows, int cols, vector<vector<int>> grid, int rowOffsets[], int colOffsets[], int row, int col, int moves) {
        int totalSum = 0;

        // Traverse all possible movements
        for (int k = 0; k < moves; k++) {
            int newRow = rowOffsets[k] + row;
            int newCol = colOffsets[k] + col;

            // Check if the new position is within the grid bounds
            if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols) {
                totalSum += grid[newRow][newCol]; // Add valid neighboring cell value
            }
        }

        return totalSum;
    }

public:

    int hopscotch(int rows, int cols, vector<vector<int>> mat, int stepType, int row, int col) {
        // Movement arrays for 1-step moves
        int oneStepOddRow[] = {-1, 0, 1, 1, 1, 0};
        int oneStepOddCol[] = {0, 1, 1, 0, -1, -1};

        int oneStepEvenRow[] = {-1, -1, 0, 1, 0, -1};
        int oneStepEvenCol[] = {0, 1, 1, 0, -1, -1};

        // Movement arrays for 2-step moves
        int twoStepOddRow[] = {-1, -1, -2, -1, -1, 0, 0, 1, 1, 2, 2, 2};
        int twoStepOddCol[] = {-2, -1, 0, 1, 2, -2, 2, -2, 2, -1, 0, 1};

        int twoStepEvenRow[] = {-2, -2, -2, -1, -1, 0, 0, 1, 1, 1, 1, 2};
        int twoStepEvenCol[] = {-1, 0, 1, -2, 2, -2, 2, -2, -1, 1, 2, 0};

        int totalSum = 0;

        // Determine movement type based on stepType and column parity
        if (stepType == 0) { // 1-step movement
            if (col % 2 == 0) {
                totalSum = calculateSum(rows, cols, mat, oneStepEvenRow, oneStepEvenCol, row, col, 6);
            } else {
                totalSum = calculateSum(rows, cols, mat, oneStepOddRow, oneStepOddCol, row, col, 6);
            }
        } else { // 2-step movement
            if (col % 2 == 0) {
                totalSum = calculateSum(rows, cols, mat, twoStepEvenRow, twoStepEvenCol, row, col, 12);
            } else {
                totalSum = calculateSum(rows, cols, mat, twoStepOddRow, twoStepOddCol, row, col, 12);
            }
        }

        return totalSum;
    }

};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n, m, ty, i, j;
        cin>>n>>m;
        vector<vector<int>> mat(n, vector<int>(m, 0));
        for(int i = 0;i < n;i++)
            for(int j = 0;j < m;j++)
                cin>>mat[i][j];
        cin>>ty>>i>>j;
        
        Solution ob;
        cout<<ob.hopscotch(n, m, mat, ty, i, j)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends