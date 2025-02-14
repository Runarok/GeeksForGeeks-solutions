//{ Driver Code Starts
// Initial Template for C++

// unordered_set::swap
#include <iostream>
#include <sstream>
#include <string>
#include <unordered_set>

using namespace std;


// } Driver Code Ends
// User function Template for C++

#include <unordered_set>
using namespace std;

void SwapMe(unordered_set<string> &first, unordered_set<string> &second) {
    // Swap the contents of the two sets using the swap function
    first.swap(second);
}


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string line1, line2;
        getline(cin, line1);
        getline(cin, line2);
        stringstream ss1(line1);
        stringstream ss2(line2);

        unordered_set<string> first, second;
        string word;
        while (ss1 >> word) {
            first.insert(line1);
        }
        while (ss2 >> word) {
            second.insert(line2);
        }

        SwapMe(first, second);
        // For printing the set
        for (const string &x : first)
            cout << x << " ";
        cout << endl;
        for (const string &x : second)
            cout << x << " ";
        cout << endl;
        cout << "~\n";
    }

    return 0;
}

// } Driver Code Ends