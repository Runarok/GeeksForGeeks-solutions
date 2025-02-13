//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to determine if the current player can win in the stone game
    bool Stonegame(int n) {
        // Check the condition based on the modulo of n with 7
        return n % 7 != 0 && n % 7 != 2;
    }
};


//{ Driver Code Starts.

int main() {
    string str;
    getline(cin, str);
    int t = stoi(str);
    while (t--) {
        getline(cin, str);
        int n = stoi(str);

        Solution ob;
        cout << (ob.Stonegame(n) ? "Player1" : "Player2") << endl;
        // cout << "~" << endl;
    }
}

// } Driver Code Ends