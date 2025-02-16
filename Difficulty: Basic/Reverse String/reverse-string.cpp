//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to reverse a given string and return the reversed string
string reverseString(string &s) {
    string reversedString; // Variable to store the reversed string
    
    // Loop through the original string in reverse order
    for (int i = s.length() - 1; i >= 0; i--) {
        reversedString += s[i]; // Append each character to the new string
    }
    
    return reversedString; // Return the reversed string
}


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;

    while (t--) {
        string s;
        cin >> s;
        string reversed = reverseString(s);
        cout << reversed << endl;

        cout << "~"
             << "\n";
    }

    return 0;
}
// } Driver Code Ends