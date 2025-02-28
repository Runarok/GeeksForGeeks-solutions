//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

vector<string> login_system(vector<string> &arr) {
    // Vector to store the result of login system output
    vector<string> res(arr.size());
    
    // Hash map to store the frequency of usernames
    unordered_map<string, int> mp;
    
    // Iterate over each element in the input array
    for (int i = 0; i < arr.size(); i++) {
        
        // If the username is not present in the map, add it to the result as is
        if (mp.find(arr[i]) == mp.end()) {
            res[i] = arr[i];
        }
        else {
            // If the username already exists, append the count (number) to the username
            int num = mp[arr[i]];
            res[i] = (arr[i] + to_string(num));
        }
        
        // Increment the frequency of the current username
        mp[arr[i]]++;
    }
    
    // Return the result array with modified usernames
    return res;
}


//{ Driver Code Starts.

vector<string> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    string s;
    vector<string> res;
    while (ss >> s) {
        res.push_back(s);
    }
    return res;
}

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<string> v = inputLine();
        vector<string> ans = login_system(v);
        for (auto i : ans) {
            cout << i << " ";
        }
        cout << endl;
        cout << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends