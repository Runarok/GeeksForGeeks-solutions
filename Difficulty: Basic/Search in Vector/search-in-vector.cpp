//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

bool binarySearch(vector<int>& arr, int k) {
    int low = 0;
    int high = arr.size() - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;  // To prevent overflow

        // If k is present at mid
        if (arr[mid] == k) {
            return true;
        }

        // If k is smaller, ignore right half
        if (arr[mid] > k) {
            high = mid - 1;
        }
        // If k is larger, ignore left half
        else {
            low = mid + 1;
        }
    }

    // k is not present in the array
    return false;
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
        (binarySearch(arr, k)) ? cout << "true" : cout << "false";
        cout << endl;
        cout << "~\n";
    }
}

// } Driver Code Ends