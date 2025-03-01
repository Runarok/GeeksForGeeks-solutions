//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    string substring(string &s, int L, int R) {
        // Length of the required substring
        int substringLength = R - L + 1;
        
        // Extract and return the substring from position L with length substringLength
        return s.substr(L, substringLength);
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        string S;
        cin >> S;
        int L, R;
        cin >> L >> R;
        Solution ob;
        cout << ob.substring(S, L, R) << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends