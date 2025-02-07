//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    long long squaresInMatrix(int m, int n) {
        // Initialize variables to store matrix dimensions as long long
        long long rows = m, cols = n, total_squares = 0;

        // Iterate from 1 to the minimum of rows and columns
        for (long long size = 1; size <= min(m, n); size++) {
            // Add the number of squares of the current size to the total count
            total_squares += rows * cols;
            // Reduce the available rows and columns for the next iteration
            rows--;
            cols--;
        }

        // Return the total count of squares in the matrix
        return total_squares;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int m,n;
        
        cin>>m>>n;

        Solution ob;
        cout << ob.squaresInMatrix(m,n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends