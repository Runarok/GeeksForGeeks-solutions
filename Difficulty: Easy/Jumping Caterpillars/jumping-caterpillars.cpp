//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int uneatenLeaves(vector<int>& arr, int n) {
        // Create a boolean vector to track eaten leaves
        vector<bool> eaten(n + 1, false);

        // For each jump length in the array
        for (int jump : arr) {
            // Mark leaves as eaten if their index is a multiple of the jump
            if (jump <= n) {
                for (int i = jump; i <= n; i += jump) {
                    eaten[i] = true;
                }
            }
        }

        // Return the count of uneaten leaves (those marked as false)
        return count(eaten.begin() + 1, eaten.end(), false);
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
        Solution obj;
        int res = obj.uneatenLeaves(arr, k);
        cout << res << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends