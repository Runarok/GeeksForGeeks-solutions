//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

/*
str: string in which pattern we have to find pattern.
pat: pattern needs to searched.
*/

bool searchPattern(string &txt, string &pat) {
    // Using the find() function to check if the pattern exists in the string
    return txt.find(pat) != string::npos;  // Returns true if pattern is found, false otherwise
}


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;

    while (t--) {
        string str, pat;
        cin >> str;
        cin >> pat;

        if (searchPattern(str, pat) == true)
            cout << "true" << endl;
        else
            cout << "false" << endl;

        cout << "~"
             << "\n";
    }
}

// } Driver Code Ends