//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

/*
V: vector needs to be heapified
*/
void heapify(std::vector<int> &arr) {
    // Convert the given vector into a max-heap
    std::make_heap(arr.begin(), arr.end());
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

        heapify(V);
        for (auto itr = V.begin(); itr != V.end(); itr++) {
            cout << *itr << " ";
        }

        cout << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends