//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

int vMax(vector<int>& arr) {
    // Use the max_element function to find the maximum element in the vector
    return *max_element(arr.begin(), arr.end());
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
        cout << vMax(arr) << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends