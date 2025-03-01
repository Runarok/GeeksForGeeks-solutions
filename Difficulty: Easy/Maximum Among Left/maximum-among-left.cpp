//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//Back-end complete function Template for C++

vector<int> maximum_from_left(vector<int>& arr) {
    
    int arraySize = arr.size();  // Getting the size of the array
    int currentMaximum = arr[0]; // Initializing the maximum with the first element
    vector<int> resultIndices;   // Vector to store the result indices

    // Iterating through the array starting from the second element
    for (int index = 1; index < arraySize; index++) {
        // If the current element is greater than the maximum found so far
        if (arr[index] > currentMaximum) {
            // Store the index of this new maximum element
            resultIndices.push_back(index);
        }
        // Update the current maximum value
        currentMaximum = max(currentMaximum, arr[index]);
    }

    // Return the result vector containing indices of elements greater than all previous ones
    return resultIndices;
}



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;

        vector<int> arr;
        int i;
        for (i = 0; i < n; i++) {
            int k;
            cin >> k;
            arr.push_back(k);
        }
        vector<int> result = maximum_from_left(arr);
        for (auto i : result) {
            cout << i << " ";
        }
        cout << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends