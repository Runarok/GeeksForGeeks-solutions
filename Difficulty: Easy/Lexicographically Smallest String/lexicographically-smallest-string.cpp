//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

string lexi_string(string &s) {
    // Create a string that is the concatenation of s with itself
    string doubled = s + s;
    int n = s.size(), start = 0;

    // Iterate over each possible starting index in the doubled string
    for (int i = 1, j = 0; i < n; i++) {
        // Compare the substring starting at 'start' with the one starting at 'i'
        while (j < n && doubled[start + j] == doubled[i + j]) j++;
        
        // If the substring starting at 'i' is lexicographically smaller, update 'start'
        if (j < n && doubled[i + j] < doubled[start + j]) start = i;

        // Reset comparison index
        j = 0;
    }

    // Return the lexicographically smallest rotation
    return doubled.substr(start, n);
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        string s;
        cin >> s;

        string ans = lexi_string(s);
        cout << ans << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends