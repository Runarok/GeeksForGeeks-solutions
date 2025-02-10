//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int minimum_vertical_sum(vector<vector<int>>& arr, int n) {
        /**
         * Function to find the minimum vertical sum in a 2D matrix.
         * 
         * @param arr 2D vector representing the matrix.
         * @param n Number of rows in the matrix.
         * @return Minimum positive vertical sum across all columns.
         */
        
        int minVerticalSum = INT_MAX; // Initialize the minimum sum with a large value

        // Iterate over possible column indices (assuming a max column index of 3005)
        for (int col = 0; col < 3005; col++) {
            int columnSum = 0;

            // Traverse each row and accumulate the sum of the current column
            for (int row = 0; row < n; row++) {
                if (arr[row].size() > col) { // Ensure the column exists in the current row
                    columnSum += arr[row][col];
                }
            }

            // Update the minimum vertical sum if a positive sum is found
            if (columnSum > 0) {
                minVerticalSum = min(columnSum, minVerticalSum);
            }
        }

        return minVerticalSum;
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        cin.ignore();
        vector<vector<int>> arr;
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            vector<int> arr2;
            int num;
            while (ss >> num) {
                arr2.push_back(num);
            }
            arr.push_back(arr2);
        }
        Solution ob;
        cout << ob.minimum_vertical_sum(arr, n) << endl;
        cout << "~\n";
    }
    return 0;
}

// } Driver Code Ends