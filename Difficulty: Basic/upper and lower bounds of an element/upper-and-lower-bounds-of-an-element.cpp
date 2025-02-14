//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

int upBound(vector<int>& arr, int k) {
    // Using upper_bound to find the first element greater than k
    auto it = upper_bound(arr.begin(), arr.end(), k);
    return (it != arr.end()) ? *it : -1; // Return -1 if no element greater than k
}

int lowBound(vector<int>& arr, int k) {
    // Using lower_bound to find the first element not less than k
    auto it = lower_bound(arr.begin(), arr.end(), k);
    return (it != arr.end()) ? *it : -1; // Return -1 if no element found
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
        int k;
        cin >> k;
        cin.ignore();

        cout << upBound(arr, k) << " " << lowBound(arr, k) << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends