//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to find the maximum gap between the first and last occurrence of elements
    int maxGap(vector<int>& arr) {
        // Create an unordered map to track the first and last occurrences of each element
        unordered_map<int, pair<int, int>> indices;

        // Track the first and last occurrences of each element in the array
        for (int i = 0; i < arr.size(); i++) {
            if (indices.find(arr[i]) == indices.end()) {
                // If the element is encountered for the first time, initialize its pair with the current index
                indices[arr[i]] = {i, i};
            } else {
                // Update the last occurrence index for the element
                indices[arr[i]].second = i;
            }
        }

        // Initialize the variable to keep track of the maximum gap
        int maxGap = 0;
        
        // Iterate through the map to calculate the maximum gap between the first and last occurrence
        for (const auto& entry : indices) {
            int gap = entry.second.second - entry.second.first;
            maxGap = max(maxGap, gap); // Update maxGap if a larger gap is found
        }

        // Return the maximum gap
        return maxGap;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore(); // Consume the newline character

    while (t--) {
        string input;
        getline(cin, input);
        stringstream ss(input);
        vector<int> arr;
        int num;
        while (ss >> num) {
            arr.push_back(num);
        }

        Solution solution;
        cout << solution.maxGap(arr) << endl;
        cout << "~\n";
    }

    return 0;
}

// } Driver Code Ends