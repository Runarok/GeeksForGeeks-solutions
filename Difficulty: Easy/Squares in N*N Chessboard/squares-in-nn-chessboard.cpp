//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to calculate total number of squares in an N x N chessboard
    long long squaresInChessBoard(long long N) {
        long long totalSquares = 0;
        
        // Loop through square sizes from 1x1 to NxN
        for (int size = 1; size <= N; size++) {
            totalSquares += (N - size + 1) * (N - size + 1);
        }
        
        return totalSquares;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long N;
        
        cin>>N;

        Solution ob;
        cout << ob.squaresInChessBoard(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends