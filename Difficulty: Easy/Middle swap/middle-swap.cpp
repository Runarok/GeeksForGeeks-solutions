//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to perform swap operation
    void middleSwap(int arr[4][4]) {
        // Swap rows 1 and 2
        for(int j = 0; j <= 3; j++) {
            swap(arr[1][j], arr[2][j]);
        }
        
        // Swap columns 1 and 2
        for(int j = 0; j <= 3; j++) {
            swap(arr[j][1], arr[j][2]);
        }
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
        ob.middleSwap(arr);

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++)
                cout << arr[i][j] << " ";
            cout << endl;
        }
    }
    return 0;
}

// } Driver Code Ends