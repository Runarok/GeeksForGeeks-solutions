//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    string maxOdd(string s) {
        int n = s.size();
        
        // Traverse the string from the end to the beginning
        for (int i = n - 1; i >= 0; i--) {
            // Check if the current character is an odd digit
            if ((s[i] - '0') % 2 != 0) {
                // Return the substring from the start to the current position (inclusive)
                return s.substr(0, i + 1);
            }
        }
        
        // If no odd digit is found, return an empty string
        return "";
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        string s;
        cin >> s;
        Solution ob;

        cout << ob.maxOdd(s) << endl;
    
cout << "~" << "\n";
}
}

// } Driver Code Ends