//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

// Function to find the minimum value in the given vector
int vMin(std::vector<int>& arr) {
    // Use std::min_element to find the smallest element in the vector
    return *std::min_element(arr.begin(), arr.end());
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
        cout << vMin(arr) << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends