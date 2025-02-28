//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
public:
    bool checkSorted(const vector<int> &arr) {
        vector<int> outOfOrd;  // Stores elements that are not in order
        int cnt = 0;  // Count of elements that are out of order
        
        // Identify elements that are out of order
        for (int i = 0; i < arr.size(); ++i) {
            if (arr[i] != i + 1) {
                outOfOrd.push_back(arr[i]);
                ++cnt;
            }
        }
        
        // If no elements are out of order, the array is already sorted
        if (cnt == 0) return true;
        // If the number of out-of-order elements is not 3 or 4, return false
        else if (cnt != 4 && cnt != 3) return false;
        
        vector<int> ref;  // Reference vector to compare the out-of-order elements
        for (const int val : outOfOrd) ref.push_back(val);
        
        int n = cnt;  // Number of elements out of order
        sort(ref.begin(), ref.end());  // Sort the out-of-order elements
        
        // Check if the sorted out-of-order elements match the original sequence
        for (int i = 0; i < n; ++i) {
            if (ref == outOfOrd && cnt == 4) return i % 2 == 0;  // For 4 out-of-order elements, check the alternating pattern
            if (ref == outOfOrd && cnt == 3) return true;  // If 3 elements are out of order, return true
            
            int tmp = ref[0];
            // Rotate the reference vector to check for another possible matching order
            for (int j = 0; j < n - 1; ++j) ref[j] = ref[j + 1];
            ref[n - 1] = tmp;
        }
        
        // Sort the reference vector in descending order and repeat the check
        sort(ref.begin(), ref.end(), greater<int>());
        for (int i = 0; i < n; ++i) {
            if (ref == outOfOrd && cnt == 4) return i % 2 == 0;  // For 4 out-of-order elements, check the alternating pattern
            int tmp = ref[0];
            // Rotate the reference vector to check for another possible matching order
            for (int j = 0; j < n - 1; ++j) ref[j] = ref[j + 1];
            ref[n - 1] = tmp;
        }
        
        // Return false if no valid configuration is found
        return false;
    }
};


//{ Driver Code Starts.
int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        Solution obj;
        bool ans = obj.checkSorted(arr);
        if (ans) {

            cout << "true" << endl;
        } else {
            cout << "false" << endl;
        }

        cout << "~" << endl;
    }
}

// } Driver Code Ends