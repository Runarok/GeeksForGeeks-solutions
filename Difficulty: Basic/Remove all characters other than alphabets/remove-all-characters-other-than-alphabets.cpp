//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function template for C++

class Solution {
public:
    // Function to remove special characters from the string
    string removeSpecialCharacter(string s) {
        string ans = "";  // Initialize an empty string to store the result
        
        // Loop through each character in the input string
        for (int i = 0; i < s.size(); i++) {
            // Check if the character is an alphabet letter
            if (isalpha(s[i])) {
                ans += s[i];  // Append the alphabet character to the result string
            }
        }

        // If the result string is not empty, return it, else return "-1"
        if (!ans.empty()) 
            return ans;
        else 
            return "-1";
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    string tc;
    getline(cin, tc);
    t = stoi(tc);
    while (t--) {
        string s;
        getline(cin, s);
        Solution ob;
        cout << ob.removeSpecialCharacter(s) << "\n";
    
cout << "~" << "\n";
}

    return 0;
}
// } Driver Code Ends