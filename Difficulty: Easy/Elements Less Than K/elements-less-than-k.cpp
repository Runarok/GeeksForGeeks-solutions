//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to return a list of elements less than k
    vector<int> list_less_than_k(vector<int> &v, int k) {
        // Vector to store elements less than k
        vector<int> result;

        // Iterate through the vector and add elements less than k to result
        for (int num : v) {
            if (num < k) {
                result.push_back(num);
            }
        }

        // Return the filtered list
        return result;
    }
};


//{ Driver Code Starts.

// Driver code
int main() {
    int t;
    cin >> t;
    cin.ignore(); // Ignore the newline after t

    while (t--) {
        string line;
        getline(cin, line); // Read the entire line as the array input
        stringstream ss(line);
        vector<int> arr;
        int num;

        while (ss >> num) {
            arr.push_back(num);
        }

        int k;
        cin >> k;
        cin.ignore(); // Ignore the newline after k

        Solution ob;
        vector<int> res = ob.list_less_than_k(arr, k);

        if (res.empty()) {
            cout << "[]" << endl;
        } else {
            for (auto it : res) {
                cout << it << " ";
            }
            cout << endl;
        }
    }

    return 0;
}
// } Driver Code Ends