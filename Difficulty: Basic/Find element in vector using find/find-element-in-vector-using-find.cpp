//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Function to check if x exists in the vector v
bool vExists(vector<int> v, int x) {
    // Use std::find to search for x in the vector
    // If found, std::find will return an iterator pointing to the element, otherwise it will return v.end()
    return (find(v.begin(), v.end(), x) != v.end());
}

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> v;
        string line, line2;
        getline(cin, line);
        getline(cin, line2);
        stringstream ss(line);
        stringstream ss1(line2);
        int num, x;
        while (ss >> num) {
            v.push_back(num);
        }
        while (ss1 >> num) {
            x = num;
        }

        if (vExists(v, x))
            cout << "true\n";
        else
            cout << "false\n";
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends