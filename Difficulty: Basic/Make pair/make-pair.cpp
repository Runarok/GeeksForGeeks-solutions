//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

pair<int, int> makePair(int x, int y) {
    // Return the pair of X and Y
    return make_pair(x, y);
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;

    while (t--) {
        int X, Y;

        // Input two elements to make them as a pair
        cin >> X >> Y;
        pair<int, int> ans = makePair(X, Y);
        cout << "(" << ans.first << "," << ans.second << ")" << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends