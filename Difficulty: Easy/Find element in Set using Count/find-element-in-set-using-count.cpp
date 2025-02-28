//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to check if an element exists in the set
bool sExists(set<int>& s, int x) {
    // Checks if the element x is present in the set
    return s.find(x) != s.end();
}



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        int x;
        cin >> x;
        cin.ignore();
        set<int> s(arr.begin(), arr.end());
        (sExists(s, x)) ? cout << "true\n" : cout << "false\n";
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends