//{ Driver Code Starts
// Initial Template for C++

// Find duplicate from an array using unordered_set
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Complete the function
vector<int> DuplicateMe(vector<int>& arr) {
    vector<int> ans;
    unordered_set<int> seen;  // Set to keep track of elements we've encountered
    
    for(int i = 0; i < arr.size(); i++) {
        // If the element is already in the set, it's a duplicate
        if(seen.find(arr[i]) != seen.end()) {
            ans.push_back(arr[i]);  // Add it to the result
        }
        else {
            seen.insert(arr[i]);  // Otherwise, add it to the set
        }
    }
    
    return ans;  // Return the list of duplicates
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
        vector<int> res = DuplicateMe(arr);
        if (!res.empty()) {
            sort(res.begin(), res.end());
            for (auto it : res)
                cout << it << " ";
            cout << endl;
        } else
            cout << "[]\n";
        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends