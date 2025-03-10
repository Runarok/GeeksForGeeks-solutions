//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
#define N 105
using namespace std;

void printArray(vector<int> arr, int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
}


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    // Function to merge k sorted arrays into a single sorted array
    vector<int> mergeKArrays(vector<vector<int>>& arr, int K) {
        // Create a vector to hold all elements from the k arrays
        vector<int> mergedArray;

        // Traverse each array in the vector of arrays
        for(int i = 0; i < arr.size(); i++) {
            for(int j = 0; j < arr[i].size(); j++) {
                // Add each element from the current array to the mergedArray
                mergedArray.push_back(arr[i][j]);
            }
        }

        // Sort the mergedArray to arrange all elements in ascending order
        sort(mergedArray.begin(), mergedArray.end());

        // Return the sorted merged array
        return mergedArray;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int k;
        cin >> k;
        vector<vector<int>> arr(k, vector<int>(k, 0));
        for (int i = 0; i < k; i++) {
            for (int j = 0; j < k; j++) {
                cin >> arr[i][j];
            }
        }
        Solution obj;
        vector<int> output = obj.mergeKArrays(arr, k);
        printArray(output, k * k);
        cout << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends