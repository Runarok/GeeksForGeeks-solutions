//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to insert elements from a vector into a forward_list
// arr: vector containing elements to be inserted
forward_list<int> insertIntoFL(vector<int>& arr) {
    // Declaring a forward_list to store the elements
    forward_list<int> forwardList;

    // Iterating through the vector and inserting each element at the front
    for (auto it = arr.begin(); it < arr.end(); it++) {
        forwardList.push_front(*it);
    }

    // Returning the populated forward_list
    return forwardList;
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
        forward_list<int> temp = insertIntoFL(arr);

        for (auto i : temp)
            cout << i << " ";

        cout << endl;
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends