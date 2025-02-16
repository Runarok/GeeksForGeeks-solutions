//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++
/*
arr: original vector
k: rotate vector by k places to the left
*/
vector<int> leftRotate(vector<int> &arr, int k) {
    // Ensure k is within bounds
    k = k % arr.size(); 
    
    // Rotate the vector left by k positions
    rotate(arr.begin(), arr.begin() + k, arr.end());
    
    return arr;
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
        leftRotate(arr, k);
        for (auto it : arr)
            cout << it << " ";
        cout << endl;
        cout << "~\n";
    }
}

// } Driver Code Ends