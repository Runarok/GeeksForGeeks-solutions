//{ Driver Code Starts
// Initial Template for C++
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//Back-end complete function Template for C++

// Function to insert elements into a multimap from the given array.
multimap<int, int> multimapInsert(vector<int>& arr) {
    int n = arr.size();
    multimap<int, int> mp;

    // Inserting each element along with its index into the multimap.
    for (int i = 0; i < n; i++)
        mp.insert({arr[i], i});

    return mp;
}

// Function to display all elements in the multimap.
void multimapDisplay(multimap<int, int> mp) {
    // Iterating through the multimap and printing each key-value pair.
    for (auto itr = mp.begin(); itr != mp.end(); itr++) {
        cout << itr->first << " " << itr->second << endl;
    }
}

// Function to erase all entries with key equal to x from the multimap.
void multimapErase(multimap<int, int>& mp, int x) {
    // Checking if key x exists in the multimap.
    if (mp.count(x) != 0) {
        mp.erase(x); // Removing all entries with key x.
        cout << "erased " << x;
    } else {
        cout << "not found";
    }

    cout << endl;
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

        multimap<int, int> mp =
            multimapInsert(arr); // multimap insert function that returns a function
        multimapDisplay(mp);     // print the keys and values of the multimap
        int x;
        cin >> x; // element to be erased
        cin.ignore();
        multimapErase(mp, x); // the erase function
        multimapDisplay(mp);
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends