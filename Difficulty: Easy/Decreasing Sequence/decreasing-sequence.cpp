//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends


class Solution {
  public:
    int minMoves(vector<int>& arr, int k) {
        // Initialize the answer to track the minimum moves
        long _answer = 0;

        // Traverse through the array to process each pair of adjacent elements
        for (long i = 0; i < arr.size() - 1; i++) {
            // Calculate the difference between the current element and the next
            long _diff = arr[i + 1] - arr[i];

            // If the difference is positive and not a multiple of k, make adjustments
            if (_diff > 0 && _diff % k != 0) {
                _answer += (_diff / k + 1);
                arr[i + 1] -= k * (_diff / k + 1);  // Reduce the next element accordingly
            }
            // If the difference is positive and a multiple of k, adjust normally
            else if (_diff > 0 && _diff % k == 0) {
                _answer += _diff / k;
                arr[i + 1] -= _diff;  // Directly reduce the next element by the difference
            }
        }

        // Return the answer modulo 10^9 + 7 to avoid overflow
        return _answer % ((int)pow(10, 9) + 7);
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
        string ks;
        getline(cin, ks);
        int k = stoi(ks);
        Solution ob;
        int ans = ob.minMoves(arr, k);
        cout << ans << "\n"
             << "~" << endl;
    }
    return 0;
}
// } Driver Code Ends