//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

void sortAndReverse(vector<int> &arr) {
    // Sort the vector in descending order using reverse iterators
    sort(arr.rbegin(), arr.rend());
}


//{ Driver Code Starts.

vector<int> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    int num;
    vector<int> res;
    while (ss >> num) {
        res.push_back(num);
    }
    return res;
}

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> V = inputLine();

        sortAndReverse(V);
        for (auto itr = V.begin(); itr != V.end(); itr++)
            cout << *itr << " ";
        cout << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends