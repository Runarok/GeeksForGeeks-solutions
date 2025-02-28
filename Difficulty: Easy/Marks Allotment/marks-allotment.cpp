//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to validate marks and return it if valid, otherwise return -1
    int marks(int a) {
        // Check if the input is within the valid range [0, 100]
        return (a >= 0 && a <= 100) ? a : -1;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int A;
        cin >> A;

        Solution ob;
        int ans = ob.marks(A);

        cout << ans << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends