//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


// User function Template for C++

// Function to remove the first element from the list
void removeFromFront(forward_list<int> &list) {
    // Removes the first element from the list
    list.pop_front();
}

// Function to remove elements after a given iterating position
// x: the position after which the elements should be removed
void removeAfter(forward_list<int> &list, int x) {
    // Create an iterator starting at the beginning of the list
    auto i = list.begin();
    // Move the iterator to the position just before the 'x' position
    advance(i, x - 1);
    // Erase all elements after the position 'x'
    list.erase_after(i);
}

// Function to remove elements from a given range (start to end positions)
// start: the starting position (inclusive) of the range
// end: the ending position (inclusive) of the range
void removeFromInRange(forward_list<int> &list, int start, int end) {
    // Create an iterator to the start position
    auto i = list.begin();
    // Move the iterator to the start position
    advance(i, start - 1);
    // Create another iterator to the end position
    auto j = list.begin();
    // Move the second iterator to the end position
    advance(j, end - 1);
    // Erase elements in the range from 'start' to 'end' positions
    list.erase_after(i, j);
}

// Function to remove all elements from the list
void removeAll(forward_list<int> &list) {
    // Clears the entire list
    list.clear();
}


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        // Reading the list
        string line;
        getline(cin, line);
        stringstream ss(line);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }
        forward_list<int> list;
        for (int i = 0; i < arr.size(); i++) {
            list.push_front(arr[i]);
        }
        list.reverse();
        // Reading the query
        getline(cin, line);
        stringstream ss2(line);
        vector<int> arr2;
        while (ss2 >> num) {
            arr2.push_back(num);
        }
        int typeQuery = arr2[0];
        if (typeQuery == 1) {
            removeFromFront(list);
        } else if (typeQuery == 2) {
            int x = arr2[1];
            removeAfter(list, x);
        } else if (typeQuery == 3) {
            int start = arr2[1], end = arr2[2];
            removeFromInRange(list, start, end);
        } else {
            removeAll(list);
        }
        if (list.empty())
            cout << "[]" << endl;
        else {
            for (int &temp : list)
                cout << temp << " ";
            cout << endl;
        }

        cout << "~\n";
    }
}

// } Driver Code Ends