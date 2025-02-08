//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function template for C++

class Solution {
  public:
    int countgroup(vector<int>& arr) {
        // Get the size of the array
        int size = arr.size();
        
        // Variable to store XOR of all elements
        int totalXOR = 0;
        
        // Compute the XOR of all elements in the array
        for (int i = 0; i < size; i++)
            totalXOR ^= arr[i];
        
        // If the XOR of all elements is 0, we can split into valid groups
        if (totalXOR == 0)
            return (1 << (size - 1)) - 1; // (2^(n-1)) - 1 possible groups
        
        // If XOR is not zero, no valid split exists
        return 0;
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
        int ans = obj.countgroup(arr);
        cout << ans << endl;
        cout << "~" << endl;
    }
}

// } Driver Code Ends