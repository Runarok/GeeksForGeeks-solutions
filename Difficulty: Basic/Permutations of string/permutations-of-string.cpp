//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

/*
Function to print all permutations of a given string.
*/

void printPermutation(string s) {
    // Sort the string to ensure that permutations are printed in lexicographical order.
    sort(s.begin(), s.end());
    
    // Generate and print each permutation of the string.
    do {
        cout << s << " ";  // Print the current permutation
    } while (next_permutation(s.begin(), s.end()));  // Generate the next permutation
}


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();

    while (t--) {
        string str;
        getline(cin, str);
        stringstream ss(str);

        vector<string> v;
        string s;
        while (ss >> s) {
            v.push_back(s);
        }

        printPermutation(v[0]);
        cout << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends