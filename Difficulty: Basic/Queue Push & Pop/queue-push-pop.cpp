//{ Driver Code Starts
// Initial Template for C++
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

queue<int> _push(vector<int> &arr);

void _pop(queue<int> &s);


// } Driver Code Ends

// User function Template for C++

queue<int> _push(vector<int> &arr) {
    // Create a queue and insert all elements from the vector into it
    queue<int> q;
    for(int i = 0; i < arr.size(); i++) {
        q.push(arr[i]);
    }
    return q;
}

void _pop(queue<int> &q) {
    // Print the front element and remove it from the queue until it becomes empty
    while(!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        string str;
        getline(cin, str);
        stringstream ss(str);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        queue<int> mys = _push(arr);
        _pop(mys);
        cout << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends