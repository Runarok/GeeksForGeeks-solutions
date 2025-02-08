//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

// } Driver Code Ends

class Solution {
  public:
    void printDiamond(int n) {
        // Printing the upper part of the diamond
        for(int row = 1; row <= n; row++) {
            // Printing leading spaces
            for(int space = 1; space <= (n - row); space++) {
                cout << " ";
            }
            // Printing stars with spaces
            for(int star = 1; star <= row; star++) {
                cout << "* ";
            }
            cout << endl;
        }

        // Printing the lower part of the diamond
        for(int row = n; row > 0; row--) {
            // Printing leading spaces
            for(int space = 1; space <= (n - row); space++) {
                cout << " ";
            }
            // Printing stars with spaces
            for(int star = 1; star <= row; star++) {
                cout << "* ";
            }
            cout << endl;
        }
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;

        Solution ob;
        ob.printDiamond(n);
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends