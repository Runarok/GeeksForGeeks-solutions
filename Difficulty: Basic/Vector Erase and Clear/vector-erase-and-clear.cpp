//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

/**
 * Function to erase an element at a specific position in a vector.
 * @param arr The vector from which an element needs to be erased.
 * @param pos The position of the element to be erased.
 */
void eraseAt(vector<int> &arr, int pos) {
    arr.erase(arr.begin() + pos);
}

/**
 * Function to erase elements within a given range in a vector.
 * @param arr The vector from which elements need to be erased.
 * @param start The starting position (inclusive) of the range.
 * @param end The ending position (exclusive) of the range.
 */
void eraseInRange(vector<int> &arr, int start, int end) {
    arr.erase(arr.begin() + start, arr.begin() + end);
}

/**
 * Function to clear all elements from a vector.
 * @param arr The vector that needs to be cleared.
 */
void clearAll(vector<int> &arr) {
    arr.clear();
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;

        vector<int> arr(n);
        for (int i = 0; i < n; i++)
            cin >> arr[i];

        int Erasetype;
        cin >> Erasetype;

        if (Erasetype == 1) {
            clearAll(arr);
        } else if (Erasetype == 2) {
            int pos;
            cin >> pos;
            eraseAt(arr, pos);

        } else {
            int start, end;
            cin >> start >> end;
            eraseInRange(arr, start, end);
        }
        if (arr.empty())
            cout << "Empty" << endl;
        else {
            for (auto itr = arr.begin(); itr != arr.end(); itr++)
                cout << *itr << " ";
            cout << endl;
        }
        cout << "~\n";
    }
}

// } Driver Code Ends