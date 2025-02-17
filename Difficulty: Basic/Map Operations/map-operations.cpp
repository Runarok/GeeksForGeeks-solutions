//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Function to insert elements of vector into map with the element as key and its index as value
map<int, int> mapInsert(vector<int>& arr) {
    map<int, int> mp;
    int n = arr.size();

    // Iterate through the array and insert elements into the map
    for(int i = 0; i < n; i++) {
        mp[arr[i]] = i; // Insert the element as key and index as value
    }

    return mp;
}

// Function to display the key-value pairs in the map
void mapDisplay(map<int, int>& mp) {
    // Iterate and print all key-value pairs in the map
    for(auto i : mp) {
        cout << i.first << " " << i.second << "\n";
    }
}

// Function to erase a key from the map if it exists
void mapErase(map<int, int>& mp, int x) {
    // Check if the key x exists in the map
    if(mp.find(x) != mp.end()) {
        mp.erase(x); // Erase the key-value pair
        cout << "erased " << x << "\n";
    } else {
        // If the key doesn't exist, print "not found"
        cout << "not found\n";
    }
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
        map<int, int> mp = mapInsert(arr); // map insert function that returns a
                                           // function
        mapDisplay(mp);                    // print the keys and values of the map
        int x;
        cin >> x; // element to be erased
        cin.ignore();
        mapErase(mp, x); // the erase function
        mapDisplay(mp);
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends