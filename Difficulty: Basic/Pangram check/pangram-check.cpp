//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

/*
str: string containing english alphabet letters
*/

bool checkPangram(string &s) {
    unordered_set<char> letters;

    // Loop through each character of the string
    for (char c : s) {
        // Convert to lowercase and insert into the set if it's a letter
        if (isalpha(c)) {
            letters.insert(tolower(c));
        }
    }

    // Check if the set contains exactly 26 unique letters
    return letters.size() == 26;
}

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;

    while (t--) {
        string str;
        cin >> str;

        if (checkPangram(str) == true)
            cout << "true";
        else
            cout << "false";
        cout << endl;

        cout << "~"
             << "\n";
    }
}

// } Driver Code Ends