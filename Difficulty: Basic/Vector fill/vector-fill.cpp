//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
// Function to fill the given vector with zeros
vector<int> vFill(vector<int>& arr) {
    fill(arr.begin(), arr.end(), 0); // Filling all elements with 0
    return arr; // Returning the modified vector
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
        vFill(arr);
        for (auto it : arr)
            cout << it << " ";
        cout << endl;
        cout << "~\n";
    }

    return 0;
}
// } Driver Code Ends