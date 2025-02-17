//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Comparator function to sort pairs based on the second element
bool myCmp(pair<int, int> p1, pair<int, int> p2) {
    // Compare the second elements of the pairs
    if (p1.second > p2.second) {
        return true; // Return true if p1's second element is greater
    } else if (p1.second == p2.second) {
        // If second elements are equal, compare the first elements
        return p1.first > p2.first; // Return true if p1's first element is greater
    }
    return false; // Return false if p1's second element is less
}

// Function to sort the vector of pairs by the second element, 
// and by the first element in case of a tie on the second element
vector<pair<int, int>> sortBySecond(vector<pair<int, int>> v) {
    // Sort the vector using the custom comparator
    sort(v.begin(), v.end(), myCmp);
    
    // Return the sorted vector
    return v;
}

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<pair<int, int>> v;

        for (int i = 0; i < n; i++) {
            int a;
            int h;
            cin >> a >> h;

            v.push_back({a, h});
        }

        // cin.ignore();
        vector<pair<int, int>> temp = sortBySecond(v);

        for (int i = 0; i < n; i++) {
            cout << "(" << temp[i].first << "," << temp[i].second << ") ";
        }

        cout << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends